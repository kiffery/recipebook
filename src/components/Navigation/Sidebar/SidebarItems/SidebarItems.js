import React from 'react';

import classes from './SidebarItems.css'

const sidebarItem = (props) => (
    <li onClick={() => props.clicked(props.name)} className={classes.sideBarItems}>
        {props.name}
    </li>
);

export default sidebarItem;