import React from 'react';

import Instruction from './Instruction/Instruction';

const instructions = (props) => {
    let totInstructions = props.int.map((instruction, index) => {
        return <Instruction key={index} body={instruction} />;
    });
    return (
        <ul>
            {totInstructions}
        </ul>
    );
}

export default instructions;