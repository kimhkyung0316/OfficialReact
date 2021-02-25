import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Header, Menu } from '../components'

const CARDS = gql`
query getCards {
    cards {
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
    return (
        <>
            <Header></Header>
            <Menu></Menu>
        </>
    );
};

export default Home;