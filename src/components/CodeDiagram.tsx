import '../styles/CodeDiagram.scss';
import { useState, useEffect } from 'react';
import '../styles/Terminal/Terminal.scss';
import FillArrow from './FillArrow';

export interface CodeDiagramProps {
  code: {
    code: string;
    text1: string;
    text2: string;
  }[];
}

export default function CodeDiagram(props: CodeDiagramProps): JSX.Element {
  const [clicked, setClick] = useState(Array(props.code.length).fill(false));
  const [diagram, setDiagram] = useState(0);

  useEffect(() => {
    const newClicked = [...clicked]; // Create a shallow copy of the original array
    newClicked[0] = true; // Modify the desired element
    setClick(newClicked); // Update the state with the modified array
  }, []);

  return (
    <div className="container">
      <div className="codebox">
        {props.code.map((code, index) => (
          <div
            className={clicked[index] ? 'clicked' : 'notclicked'}
            onClick={() => {
              const newClicked = [...clicked];
              for (let i = 0; i < newClicked.length; i++) newClicked[i] = false;
              newClicked[index] = true;
              setClick(newClicked);
              setDiagram(index);
            }}
            key={index}
          >
            <p>{code.code}</p>
          </div>
        ))}
      </div>
      <div className="arrow">
        <FillArrow
          text1={props.code[diagram].text1}
          text2={props.code[diagram].text2}
        />
      </div>
    </div>
  );
}
