import React from 'react';

import cn from 'classnames';
import css from './event-card.module.css'

const EventCard = ( Event ) => {
    const { type, title, body, thumbnail, source, good, bad, comments} = Event;

    return (
        <div className={cn(css.card)}>
            <div className={cn(css.cardContent)}>
                <div className={cn(css.cardImageContainer)}>
                    <img className={cn(css.cardImage)} src={thumbnail}/>
                </div>
                <div className={cn(css.cardBody)}>
                    <div className={cn(css.titleContainer)}>
                        <div className={cn(css.title)}>[{type}] {title}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;