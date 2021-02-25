import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Header, Menu } from '../components'

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
        <>
            <Header></Header>
            <Menu></Menu>
        </>
    );
};

export default Home;