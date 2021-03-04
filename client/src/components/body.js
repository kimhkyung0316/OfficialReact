import React from 'react';

import cn from 'classnames';
import css from './body.module.css';

const Body = ({children}) => {
    return (
        <div className={cn(css.body)}>
            {children}
        </div>
    )
}

export default Body;