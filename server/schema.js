import { gql } from 'apollo-server';

const typeDefs = gql`
    type Bug {
        id: ID
        bug_name: String!
        bug_status: String!
    }

    type Query {
        getBugs: [Bug]
    }

    type Mutation {
        addBug(bug_name: String!, bug_status: String!): Bug
        updateBug(id: ID!, bug_name: String!, bug_status: String!): Bug
        deleteBug(id: ID!): Boolean
    }
`;

export default typeDefs;
