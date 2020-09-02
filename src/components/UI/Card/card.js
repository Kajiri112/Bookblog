import React from'react';
import './card.css';

const Card = (props) => (
    <div className="card" style={props.style}>
        {props.children}
    </div>
);
export default Card;