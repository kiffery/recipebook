import React from 'react';

import Ingredients from './Ingredients/Ingredients';
import Instructions from './Instructions/Instructions';

const recipe = (props) => {
    let ingredientList = props.currentRec.ingredients.map((ingredient, index) => {
        return <Ingredients key={index} name={ingredient[0]} amount={ingredient[1]} unit={ingredient[2]} />;
    })

    return (
        <React.Fragment>
            <div>
            <h1>{props.currentRec.name}</h1>
            </div>
            <div style={{width: '20%', float: 'left', padding: '25px 0'}}>
            <ul>
                {ingredientList}
            </ul>
            </div>
            <div style={{width: '80%', textAlign: 'right', float: 'left', padding: '25px 0'}}>
            <Instructions int={props.currentRec.instructions} />
            </div>
        </React.Fragment>
    );
}

export default recipe;