import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// types
import typeDefs from './schema.js';
import resolvers from './resolver.js';


// Server setup
const server = new ApolloServer({
    // It expects two properties => typeDefs and resolvers
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port ', 4000)