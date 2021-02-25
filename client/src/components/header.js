import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

import Menu from './menu'
import cn from 'classnames';
import Home from '../pages';
import css from './header.module.css';

const Header = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => setClicked(!clicked);

    return (
        <div className={cn(css.headerBar)}>
            <div className={cn(css.headerContainer)}>
                <Link to="/">
                    <div className={cn(css.titleContainer)}>
                        <div className={cn(css.title)}>
                            <h3>Official.com</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;