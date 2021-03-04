import React, { Component } from 'react';
import { useQuery, gql } from '@apollo/client';

import { Layout, QueryResult, EventCard } from '../components'

const GET_EVENTS = gql`
query GetEvents {
    events {
        id
        type
        title
        body
        thumbnail
        source
        good
        bad
    }
}`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_EVENTS);

    return (
        <Layout>
            <QueryResult loading={loading} error={error} data={data}>
                {data?.events?.map((event) => (
                    <EventCard key={event.id} event={event}/>
                ))}
            </QueryResult>               
        </Layout>
    );
};

export default Home;