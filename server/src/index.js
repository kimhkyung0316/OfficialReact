const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const events = [
    {
        id: () => 'card1',
        type: () => 'TransferTheory',
        title: () => '손흥민 => 유벤투스',
        body: () => '유벤투스 손흥민 이적 위해 1208억 준비 예정',
        thumbnail: () => '../source/son.png',
        source: () => 'https://sports.news.naver.com/news.nhn?oid=413&aid=0000113708',
        good: () => 35,
        bad: () => 156,
        comments: () => {
            return {
                id: 'reply1',
                author: 'Harry',
                commentBody: 'No way!'  
            };
        },
    },
    {
        id: () => 'card2',
        type: () => 'TransferOfficial',
        title: () => '우파메카노 => 바이에른 뮌헨',
        body: () => '우파메카노, 바이에른 뮌헨 이적 확정',
        thumbnail: () => '../source/son.png',
        source: () => 'https://sports.news.naver.com/news.nhn?oid=413&aid=0000113708',
        good: () => 35,
        bad: () => 156,
        comments: () => {
            return {
                id: 'reply14',
                author: 'Harry',
                commentBody: 'What?'  
            };
        },
    },
];

const resolvers = {
    Query: {
        events: () => events,
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});

