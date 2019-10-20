import gql from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
    }
`;

export const resolvers = {
    Launch: {
        isInCart: (launch, _, { cache }) => {}
    },
    Mutation: {
        addOrRemoveFromCart: (_, { id }, { cache }) => {}
    }
};
