import React from 'react';
import SideBarItems from './SidebarItems/SidebarItems'

const sidebar = (props) => {
    let recipies = props.recipes.map((recipe, index) => {
        return <SideBarItems key={index} name={recipe.name} clicked={props.clicked}/>;
    });
    return(
        <React.Fragment>
            <ul>
                {recipies}
            </ul>
        </React.Fragment>
    );
}

export default sidebar;