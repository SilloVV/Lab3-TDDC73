import { gql } from '@apollo/client';

export const get_trendingphp = gql`
query {
    search(query: "language:php stars:>10000", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            description
            name
            owner {
              login
            }
            createdAt
            stargazers {
              totalCount
            }
            url
            primaryLanguage {
                name
              }
              defaultBranchRef {
              name
            }
            licenseInfo {
              name
            }
            refs(refPrefix: "refs/heads/") {
              totalCount
            }
            object(expression: "master") {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          } 
        }
      }
    }
  }
`;

export const get_trendingjs = gql`
query {
    search(query: "language:javascript stars:>10000", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              login
            }
            createdAt
            stargazers {
              totalCount
            }
            url
            primaryLanguage {
                name
              }
              defaultBranchRef {
              name
            }
            licenseInfo {
              name
            }
            refs(refPrefix: "refs/heads/") {
              totalCount
            }
            object(expression: "master") {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          } 
        }
      }
    }
  }
`;

export const get_trendingcpp = gql`
query {
    search(query: "language:C++ stars:>10000", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              login
            }
            createdAt
            stargazers {
              totalCount
            }
            url
            primaryLanguage {
                name
              }
              defaultBranchRef {
              name
            }
            licenseInfo {
              name
            }
            refs(refPrefix: "refs/heads/") {
              totalCount
            }
            object(expression: "master") {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          } 
        }
      }
    }
  }
`;

export const get_trendingcss = gql`
query {
    search(query: "language:css stars:>10000", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              login
            }
            createdAt
            stargazers {
              totalCount
            }
            url
            primaryLanguage {
                name
              }
              defaultBranchRef {
              name
            }
            licenseInfo {
              name
            }
            refs(refPrefix: "refs/heads/") {
              totalCount
            }
            object(expression: "master") {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          } 
        }
      }
    }
  }
`;
export const get_trendingcsharp = gql`
query {
    search(query: "language:c# stars:>10000", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              login
            }
            createdAt
            stargazers {
              totalCount
            }
            url
            primaryLanguage {
                name
              }
              defaultBranchRef {
              name
            }
            licenseInfo {
              name
            }
            refs(refPrefix: "refs/heads/") {
              totalCount
            }
            object(expression: "master") {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          } 
        }
      }
    }
  }
`;

export const get_trendingpython = gql`
query {
    search(query: "language:python stars:>10000", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              login
            }
            createdAt
            stargazers {
              totalCount
            }
            url
            primaryLanguage {
                name
              }
              defaultBranchRef {
              name
            }
            licenseInfo {
              name
            }
            refs(refPrefix: "refs/heads/") {
              totalCount
            }
            object(expression: "master") {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          } 
        }
      }
    }
  }
`;


export const get_trendingjava = gql`
query {
    search(query: "language:java stars:>10000", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              login
            }
            createdAt
            stargazers {
              totalCount
            }
            url
            primaryLanguage {
                name
              }
              defaultBranchRef {
              name
            }
            licenseInfo {
              name
            }
            refs(refPrefix: "refs/heads/") {
              totalCount
            }
            object(expression: "master") {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          } 
        }
      }
    }
  }
`;


export const get_trendinghtml = gql`
query {
    search(query: "language:html stars:>10000", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              login
            }
            createdAt
            stargazers {
              totalCount
            }
            url
            primaryLanguage {
                name
              }
              defaultBranchRef {
              name
            }
            licenseInfo {
              name
            }
            refs(refPrefix: "refs/heads/") {
              totalCount
            }
            object(expression: "master") {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          } 
        }
      }
    }
  }
`;

export const get_trendingall = gql`
query {
    search(query: " stars:>10000", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              login
            }
            createdAt
            stargazers {
              totalCount
            }
            url
            primaryLanguage {
                name
              }
              defaultBranchRef {
              name
            }
            licenseInfo {
              name
            }
            refs(refPrefix: "refs/heads/") {
              totalCount
            }
            object(expression: "master") {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          } 
        }
      }
    }
  }
`;

