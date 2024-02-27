import '../styles/CodeDiagram.scss';
import { useState } from 'react';
import '../styles/Terminal/Terminal.scss';
import FilledDot from '../../public/FilledDot.svg';
import lesson5pic1 from '../../public/lesson5pic1.svg';
import lesson5pic2 from '../../public/lesson5pic2.svg';
import lesson5pic3 from '../../public/lesson5pic3.svg';
import RegDot from '../../public/RegDot.svg';

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
              <img src={lesson5pic1} alt="Lesson 5 Pic1" />
            </div>
          )}
          {diagram === 1 && (
            <div className="resizedimage1">
              <img src={lesson5pic2} alt="Lesson 5 Pic2" />
            </div>
          )}
          {diagram == 2 && (
            <div className="resizedimage1">
              <img src={lesson5pic3} alt="Lesson 5 Pic3" />
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
