import { FC } from "react";
import { DraggableCore } from "react-draggable";
import Answer from "./Answer";

interface Props
{
    options: Array<string>;
}

const DraggableModule: FC<Props> = ({options})=>
{
    return(
        <DraggableCore>
            <div style={{background: 'green', padding: '15%'}}>
                {options.map(
                    (item: string)=>(
                        <Answer option={item} />
                    )
                )}
            </div>
        </DraggableCore>
    );
}

export default DraggableModule;