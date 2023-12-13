import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './Apollo';
import TrendingRepos from './trendingcomposant';
import { View, Text } from 'react-native';

export default function  App(){
 
    

 
  return (
    
    <ApolloProvider client={client} >
      
      <TrendingRepos  />
      
      
    </ApolloProvider>
  );
  
};
