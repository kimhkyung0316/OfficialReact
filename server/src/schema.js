const { gql } = require('apollo-server');

typeDefs = gql`
type Query {
    events: [Event!]!
    comments: [Comment]
}

type Event {
    id: ID!
    type: EventType!
    title: String!
    body: String
    thumbnail: String
    source: String
    good: Int
    bad: Int
    comments: [Comment]
}

type Comment {
    id: ID!
    author: String!
    commentBody: String!
}

enum EventType {
    TransferOfficial
    TransferTheory
    Gossip
}
`;

module.exports = typeDefs;