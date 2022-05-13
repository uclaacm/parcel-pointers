import { FC } from "react";
import DraggableModule from "../components/DraggableModule";

const Exercise1: FC = ()=>
{
    let options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7"]
    return(
        <>
            <h1>Exercise 1</h1>
            <p>Explanation blah blah</p>
            <DraggableModule options={options}/>
        </>
    );
}

export default Exercise1;