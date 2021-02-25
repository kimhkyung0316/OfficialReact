import React from 'react';

import cn from classnames;
import css from './eventCard.module.css'

const EventCard = ({ Event }) => {
    const { type, title, body, thumbnail, source, good, bad, comments} = Event;

    return (
        <div className={cn(css.card)}></div>
    );
}