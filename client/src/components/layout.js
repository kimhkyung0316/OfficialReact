import React from 'react';

import cn from 'classnames';
import css from './layout.module.css';
import { Header, Menu } from '../components';

const Layout = ({children}) => {
    return (
        <>
            <Header></Header>
            <Menu></Menu>
            <div className={cn(css.pageBody)}>
                {children}
            </div>
        </>
    );
}

export default Layout;