import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Layout, QueryResult, EventCard } from '../components'
import { eventNames } from 'process';

const EVENTS = gql`
query getEvents {
    events {
        id
        type
        title
        body
        thumbnail
        source
        good
        bad
        comments {
        id
        author
        commentBody
        }
    }
}`;

const Home = () => {
const { loading, error, data } = useQuery(EVENTS);

    return (
        <Layout>
            <QueryResult loading={loading} error={error} data={data}>
                {data?.evnents?.map((events) => (
                    <EventCard key={events.id}></EventCard>
                ))} 
            </QueryResult>
        </Layout>
    );
};

export default Home;