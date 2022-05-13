import React from "react";
import Draggable from "react-draggable";

interface Props
{
    option: string;
}

const Answer: React.FC<Props> = ({option})=>
{
    return(
        <Draggable>
            <p style={{background: 'red', width: '20%', marginLeft: 'auto', marginRight: 'auto'}}>Option: {option}</p>
        </Draggable>
    );
}

export default Answer;