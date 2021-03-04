import React from 'react';

import cn from 'classnames';
import { Header, Menu, Body } from '../components';

const Layout = ({children}) => {

    return (
        <>
            <Header></Header>
            <Menu></Menu>
            <Body>
                {children}
            </Body>
        </>
    );
}

export default Layout;