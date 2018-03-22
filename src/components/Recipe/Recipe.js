import React from 'react';

import Ingredients from './Ingredients/Ingredients';
import Instructions from './Instructions/Instructions';

import classes from './Recipe.css'

const recipe = (props) => {
    let ingredientList = props.currentRec.ingredients.map((ingredient, index) => {
        return <Ingredients key={index} name={ingredient[0]} amount={ingredient[1]} unit={ingredient[2]} />;
    })

    return (
        <div className={classes.recipe}>
                <div className={classes.title}>
                <h1>{props.currentRec.name}</h1>
            </div>
            <div className={classes.ingredients}>
                <ul>
                    <li><h3>Ingredients</h3></li>
                    {ingredientList}
                </ul>
            </div>
            <div className={classes.instructions}>
                <Instructions int={props.currentRec.instructions} />
            </div>
        </div>
    );
}

export default recipe;