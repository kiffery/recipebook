import React from 'react';

import classes from './SidebarItems.css'

const sidebarItem = (props) => (
    <li onClick={() => props.clicked(props.name)}>
        {props.name}
    </li>
);

export default sidebarItem;