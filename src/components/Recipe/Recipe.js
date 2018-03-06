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
            <div>
                <h1>{props.currentRec.name}</h1>
            </div>
            <div className={classes.ingredients}>
                <ul>
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