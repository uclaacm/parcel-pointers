import '../styles/CodeDiagram.scss';
import { useState, useEffect } from 'react';
import '../styles/Terminal/Terminal.scss';
import FilledDot from '../../public/FilledDot.png';
import RegDot from '../../public/RegDot.png';
import lesson4pic1 from '../../public/lesson4pic1.svg'
import lesson4pic2 from '../../public/lesson4pic2.svg'
import lesson4pic3 from '../../public/lesson4pic3.svg'

export interface CodeDiagramProps {
  code: {
    code: string;
    text1: string;
    text2: string;
  }[];
}

export default function CodeDiagram(props: CodeDiagramProps): JSX.Element {
  const [clicked, setClicked] = useState<number | null>(null); 
  const [diagram, setDiagram] = useState<number | null>(null);

  return (
    <div className="container">
      <div className="diagramwrapper">
        <div className="codebox">
          {props.code.map((code, index) => (
            <div
              className={clicked === index ? 'clicked' : 'notclicked'}
              onClick={() => {
                setClicked(index);
                setDiagram(index);
              }}
              key={index}
            >
              <p>{code.code}</p>
            </div>
          ))}
        </div>
        <div className="arrow">
          {diagram === 0 && (
            <div className="resizedimage">
              <img src={lesson4pic1} alt="Lesson 4 Pic1"/>
            </div>
          )}
          {diagram === 1 && (
            <div className="resizedimage1">
              <img src={lesson4pic2} alt="Lesson 4 Pic2"/>
            </div>
          )}
          {diagram == 2 && (
            <div className="resizedimage1">
              <img src={lesson4pic3} alt="Lesson 4 Pic3"/>
            </div>
          )}
        </div>
      </div>
      <div className="indicators">
          {props.code.map((_, index) => (
            <img
              key={index}
              src={clicked === index ? FilledDot : RegDot}
              alt={`Indicator ${index + 1}`}
            />
          ))}
      </div>
    </div>
  );
}
