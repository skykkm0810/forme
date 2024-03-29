import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  export const client = new ApolloClient({
    uri: 'http://localhost:3400/graphql',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    isLoggedIn: {
                        read() {
                            return false;
                        }
                    }
                }
            }
        }
    })
  });