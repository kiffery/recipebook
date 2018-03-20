import React from 'react';

import Toggle from './Toggle/Toggle'
import classes from './Header.css'

const header = (props) => (
    <div className={classes.container}>
        <div className={classes.left}>
            <h1>
                Recipie Book
            </h1>
        </div>
        <div className={classes.right}>
            <Toggle clicked={props.clicked} />
        </div>
    </div>
);

export default header;