import React,{ useState,useRef } from 'react'
import {StyleSheet} from 'react-native';
import { ScrollView,View, Text,TouchableOpacity,Modal } from 'react-native';
import { useQuery } from '@apollo/client';
import {  get_trendingall,get_trendingcpp, get_trendingcsharp, get_trendingcss, get_trendingjava, get_trendingjs, get_trendingphp, get_trendingpython } from './query';
import DropDownPicker from 'react-native-dropdown-picker';



const TrendingRepos = () => {

    const [open, setOpen] = useState(false); 
    const [language, setlanguage] = useState('php');
    const[opacitymore,setopacitymore]=useState(0);
  
    const [items, setItems] = useState([
      {label: 'C++', value: 'c++'},
      {label: 'JavaScript', value: 'javascript'},
      {label: 'CSS', value: 'css'},
      {label: 'PHP', value: 'php'},
      {label: 'C#', value: 'c#'},
      {label: 'Python', value: 'python'},
      {label: 'Java', value: 'java'},
      {label: 'HTML', value: 'html'},
      {label: 'All', value: 'all'},
    ]);

    const getTrendingQuery = () => {
    switch (language) {
      case 'php':
        return get_trendingphp;
      case 'html':
        return get_trendinghtml;
      case 'c++':
        return get_trendingcpp;
      
      case 'java':
        return get_trendingjava;
      
      case 'javascript':
        return get_trendingjs;
      
      case 'css':
        return get_trendingcss;
      case 'python':
        return get_trendingpython;
      case 'c#':
        return get_trendingcsharp;
      
      case 'all':
        return get_trendingall;
      
      default:
        return get_trendingphp; 
    }
  };
 
  
  const [selectedproject, setselectedproject] = useState(null);

  const handleMorePress = (projectData) => {
    
    setselectedproject(projectData);
    
  };

  const handleclosemore = () => {
    setselectedproject(null);
  };



   const { loading, error, data } = useQuery(getTrendingQuery())
    if (loading) return <Text style={{fontSize:30, position:'absolute',top:250,left:150,fontStyle:'italic'}}>Loading...</Text>;
    if (error) return <Text style={{fontSize:30, position:'absolute',top:250,left:10,fontStyle:'italic'}}>Error :{error.message}</Text>;
      
    
    
   

  


  return (
    <View style={{paddingTop:70,backgroundColor:'#82C0CC'}}>
      <DropDownPicker
      open={open}
      value={language}
      items={items}
      setOpen={setOpen}
      setValue={setlanguage}
      setItems={setItems}
      style={{width:'90%',marginHorizontal:20,zIndex:1,bottom:0}}
      onSelectItem={console.log(language)}
    
    />
    
    <ScrollView style={{backgroundColor:'#82C0CC',paddingTop:10}} contentContainerStyle={{ paddingBottom: 80 }}>
   
      {data.search.edges.map(({ node }) => (
        <View key={node.name} style ={styles.container}>
          
          <Text style={styles.text}>{node.name}</Text>
          <Text style={styles.text1}>Stars: {node.stargazers.totalCount}</Text>
          <Text style={styles.text}>Language: {node.primaryLanguage ? node.primaryLanguage.name : 'N/A'}</Text>
          <Text style={styles.text}>URL: {node.url}</Text>
          <Text style={styles.text}>Username: {node.owner.login} </Text>
          <Text style={styles.text}>Date: {node.createdAt} </Text>
          
          <TouchableOpacity 
           
           style={{height:30, width:90,backgroundColor:'#489FB5',borderRadius:5,paddingTop:5,paddingLeft:20,marginTop:20,opacity:1-opacitymore}} 
           onPress={() => handleMorePress(node)}
                 >
          <Text style={{color:'white'}}>More...</Text>
          
            </TouchableOpacity>
            <Modal
                animationType="slide"      
                transparent={true}
                visible={selectedproject !== null}
                onRequestClose={() => {
                setselectedproject(null);
                }}
              >
                <View style={{ flex: 1,justifyContent: "center",alignItems: "center",marginTop: 22}}>
                  <View style={{margin: 20,backgroundColor: "white",borderRadius: 20,padding: 35,alignItems: "center",}}>
                    <Text style={styles.textmore1}>Description: {selectedproject ? selectedproject.description : ''}</Text>
                    <Text style={styles.textmore1}>Commits: {selectedproject?.object?.history?.totalCount || 'N/A'}</Text>
                    <Text style={styles.textmore1}>Branches: {selectedproject?.refs?.totalCount || 'N/A'}</Text>
                    <Text style={styles.textmore1}>Licens: {selectedproject?.licenseInfo?.name || 'N/A'}</Text>
                    <TouchableOpacity
                      style={styles.buttonclose}
                      onPress={() => handleclosemore()}
                    >
                      <Text style={styles.textstyle}>Back</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

           
          
          
        </View>
        
        
      ))}
     
  
    </ScrollView>
    
    </View>


    
  );
};

export default TrendingRepos;

const styles = StyleSheet.create({
    container: {
      padding: 10,
      margin:10,
      backgroundColor: '#16697A',
      justifyContent:"center",
      alignItems:'center',
      borderRadius:10,
      borderWidth:10,
      borderColor:'#489FB5',
      left:11,
      width:'89%'


      
    },
    text:{
        color:'#EDE7E3',
        fontWeight:'bold',
        
    },
    text1:{
      color:'gold',
      fontWeight:'bold',
      backgroundColor:'red',
      borderRadius:5,
      
  }, 
  textmore:{
    color:'#EDE7E3',
    fontWeight:'bold',
   
},

buttonclose: {
  backgroundColor: "#2196F3",
  borderRadius: 20,
  padding: 10
  
},
textstyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
textmore1: {
  marginBottom: 15,
  textAlign: "center"
}

  
  });
  

 