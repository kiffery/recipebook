import React from 'react';

import classes from './SearchBar.css';

const searchBar = (props) => (
    <input type="text" placeholder="Search.." onChange={(event) => props.searched(event)} className={classes.searchBar}/>
);

export default searchBar;