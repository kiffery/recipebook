import React from 'react';

const sidebarItem = (props) => (
    <li onClick={() => props.clicked(props.name)} style={{boarderStyle: 'solid'}}>
        {props.name}
    </li>
);

export default sidebarItem;