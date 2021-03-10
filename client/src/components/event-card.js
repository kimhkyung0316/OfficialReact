import React from 'react';

import cn from 'classnames';
import css from './event-card.module.css'

const EventCard = ( Event ) => {
    const { bad, body, good, id, source, thumbnail, title, type } = Event.event;

    return (
        <div className={cn(css.card)}>
            <div className={cn(css.cardContent)}>
                <div className={cn(css.cardImageContainer)}>
                    <img className={cn(css.cardImage)}/>
                </div>
                <div className={cn(css.cardBody)}>
                    <div className={cn(css.titleContainer)}>
                        <h3 className={cn(css.title)}>[{type}] {title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;