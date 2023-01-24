import React from 'react';

const Card = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}

export default Card;