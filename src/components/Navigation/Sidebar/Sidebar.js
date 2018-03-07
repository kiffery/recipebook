import React from 'react';
import SideBarItems from './SidebarItems/SidebarItems';
import classes from './Sidebar.css';
import SearchBar from './SearchBar/SearchBar'

const sidebar = (props) => {
    let recipies = props.recipes.map((recipe, index) => {
        return <SideBarItems key={index} name={recipe.name} clicked={props.clicked}/>;
    });
    return(
        <div className={classes.sideBar}>
            <ul>
                <li>
                    <SearchBar searched={props.searched} /> 
                </li>
                <hr />
                {recipies}
            </ul>
        </div>
    );
}

export default sidebar;