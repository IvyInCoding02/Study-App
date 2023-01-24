import React from 'react';
import Card from './Card/Card';


const Cards =(props) => {
return(
    <div className = "container">
        <h1>Cards Section</h1>
        {
            props.db.map((item)=>(
                <Card title ={item.title} desc ={item.desc}/>
            ))
        }
    </div>
)
}

export default Cards;