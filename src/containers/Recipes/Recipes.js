import React, { Component } from 'react';

import Recipe from '../../components/Recipe/Recipe';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import classes from './Recipes.css';
import Header from '../../components/Navigation/Header/Header';
import Backdrop from '../../components/Navigation/Backdrop/Backdrop';

class Recipes extends Component {
    state = {
        recipes: [{
            name: "Bucatini",
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
                "Dice the tomatoes and mozzarella and throw that stuff into a bowl.",
                "Mince the garlic and tear the basil, and add them to the mix with olive oil  and salt and pepper to taste.",
                "Don't pussyfoot around the salt and pepper, unless of course you have an affinity for shitty food; then please pussyfoot away. Let the mixure sit for an hour.",
                "Cook the pasta in heavily salted water until al dente: that's italian for \"not total shit\" Then add to the tomato mixure, toss, and serve" 
            ]
        },
        {
            name: 'Another One',
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
                "Dice the tomatoes and mozzarella and throw that stuffinto a bowl.",
                "Mince the garlic and tear the basil, and add them to the mix with olive oil  and salt and pepper to taste.",
                "Don't mess around the salt and pepper, unless of course you have an affinity for poopy food; then please bad word away. Let the mixure sit for an hour.",
                "Cook the pasta in heavily salted water until al dente: that's italian for \"not total poo\" Then add to the tomato mixure, toss, and serve" 
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
                "Don't mess around the salt and pepper, unless of course you have an affinity for poopy food; then please badword away. Let the mixure sit for an hour.",
                "Cook the pasta in heavily salted water until al dente: that's italian for \"not total poo\" Then add to the tomato mixure, toss, and serve" 
            ]
        },
        filteredItems: null,
        displaySide: false
    };

    componentWillMount() {
        this.setState({filteredItems: this.state.recipes});
    }

    selectedRecipeHandler = (name) => {
        let newRecipe = this.state.recipes.find(recipe => {
            return recipe.name === name;
        });

        this.setState({selectedRecipe: newRecipe});
    }

    searchedHandler = (event) => {
        if (event.target.value) {
            let filtered = this.state.recipes.filter(recipe => recipe.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
            this.setState({filteredItems: filtered})

        } else {
            this.setState({filteredItems: this.state.recipes})
        }
    }

    onToggleHandler = () => {
        this.setState({displaySide: !this.state.displaySide})
    }


    render () {

        let attachedClasses = [classes.sideBar, classes.Close];
        if (this.state.displaySide) {
            attachedClasses = [classes.sideBar, classes.Open];
        }

        return (
            <div className={classes.container}>
                <Header clicked={this.onToggleHandler} />
                <div className={attachedClasses.join(' ')} >
                    <Sidebar recipes={this.state.filteredItems} clicked={this.selectedRecipeHandler} searched={this.searchedHandler}/> 
                </div>
                <div className={classes.main}>
                    <Recipe currentRec={this.state.selectedRecipe} />
                </div>
                <Backdrop show={this.state.displaySide} clicked={this.onToggleHandler}/> 
            </div>
        );
    }
}

export default Recipes;