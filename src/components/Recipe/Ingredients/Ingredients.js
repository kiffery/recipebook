import React from 'react';

const ingredients = (props) => (
        <li>
            <p>{props.amount} {props.unit} {props.name}</p>
        </li>
);

export default ingredients;