import React, { Component } from 'react';

import Recipe from '../../components/Recipe/Recipe';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar'; 

class Recipes extends Component {
    state = {
        recipes: [{
            name: 'Bucatini',
            ingredients: [
                ["plum tomatoes", 1.5, "lb"],
                ["fresh mozzarella cheese", 8, "oz"],
                ["garlic", 4, "cloves"],
                ["fresh basil", 0.5, "cup"],
                ["extra-virgin olive oil", 3, "tbsp"],
                ["Salt", null, null],
                ["Pepper", null, null],
                ["bucatini", 12, "oz"]    
            ],
            instructions: [
                "Dice the tomatoes and mozzarella and throw that shit into a bowl.",
                "Mince the garlic and tear the basil, and add them to the mix with olive oil  and salt and pepper to taste.",
                "Don't pussyfoot around the salt and pepper, unless of course you have an affinity for shitty food; then please pussyfoot away. Let the mixure sit for an hour.",
                "Cook the pasta in heavily salted water until al dente: that's italian for \"not total shit\" Then add to the tomato mixure, toss, and serve" 
            ]
        },
        {
            name: 'Nah Bitch',
            ingredients: [
                ["This", 1.5, "lb"],
                ["fresh mozzarella cheese", 8, "oz"],
                ["garlic", 4, "cloves"],
                ["fresh basil", 0.5, "cup"],
                ["Different", 3, "tbsp"],
                ["Salt", null, null],
                ["Pepper", null, null],
                ["bucatini", 12, "oz"]    
            ],
            instructions: [
                "Dice the tomatoes and mozzarella and throw that shit into a bowl.",
                "Mince the garlic and tear the basil, and add them to the mix with olive oil  and salt and pepper to taste.",
                "Don't pussyfoot around the salt and pepper, unless of course you have an affinity for shitty food; then please pussyfoot away. Let the mixure sit for an hour.",
                "Cook the pasta in heavily salted water until al dente: that's italian for \"not total shit\" Then add to the tomato mixure, toss, and serve" 
            ]
        }],
        selectedRecipe: {
            name: 'Bucatini',
            ingredients: [
                ["plum tomatoes", 1.5, "lb"],
                ["fresh mozzarella cheese", 8, "oz"],
                ["garlic", 4, "cloves"],
                ["fresh basil", 0.5, "cup"],
                ["extra-virgin olive oil", 3, "tbsp"],
                ["Salt", null, null],
                ["Pepper", null, null],
                ["bucatini", 12, "oz"]    
            ],
            instructions: [
                "Dice the tomatoes and mozzarella and throw that shit into a bowl.",
                "Mince the garlic and tear the basil, and add them to the mix with olive oil  and salt and pepper to taste.",
                "Don't pussyfoot around the salt and pepper, unless of course you have an affinity for shitty food; then please pussyfoot away. Let the mixure sit for an hour.",
                "Cook the pasta in heavily salted water until al dente: that's italian for \"not total shit\" Then add to the tomato mixure, toss, and serve" 
            ]
        },
        filter: null
    };

    selectedRecipeHandler = (name) => {
        let newRecipe = this.state.recipes.find(recipe => {
            return recipe.name === name;
        });

        this.setState({selectedRecipe: newRecipe});
    }

    render () {
        return (
            <React.Fragment>
                <Sidebar recipes={this.state.recipes} clicked={this.selectedRecipeHandler} />
                <div style={{width: '80%', textAlign: 'left', float: 'left'}}>
                    <Recipe currentRec={this.state.selectedRecipe} />
                </div>
            </React.Fragment>
        );
    }
}

export default Recipes;