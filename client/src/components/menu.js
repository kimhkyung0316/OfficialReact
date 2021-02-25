import React, { useState, setState } from 'react';

import cn from 'classnames';
import css from './menu.module.css';
import MenuItems from './menu_items';
import menuOpenIcon from '../source/img/menu_open.png'
import menuCloseIcon from '../source/img/menu_close.png';

const Menu = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => setClicked(!clicked);
    
    return (
        <div>
            { clicked && 
            <div className={cn(css.menu)}>
                <div className={cn(css.menuCloseButtonContainer)}>
                    <img className={cn(css.menuCloseButton)} src={menuCloseIcon} onClick={handleClick}/>
                </div>
            </div> }
            { !clicked && 
            <div className={cn(css.menuOpenButtonContainer)}>
                <img className={cn(css.menuOpenButton)} src={menuOpenIcon} onClick={handleClick}/>
            </div> }
        </div>
    );
    
};

export default Menu;