import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Layout, QueryResult } from '../components'

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
        <Layout></Layout>
    );
};

export default Home;