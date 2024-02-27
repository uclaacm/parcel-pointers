import '../styles/CodeDiagram.scss';
import { useState } from 'react';
import '../styles/Terminal/Terminal.scss';
import FilledDot from '../../public/FilledDot.svg';
import RegDot from '../../public/RegDot.svg';

export interface CodeDiagramProps {
  code: {
    code: string;
  }[];
  images: { src: string; alt: string; className: string }[];
}

export default function CodeDiagram(props: CodeDiagramProps): JSX.Element {
  const [clicked, setClicked] = useState<number | null>(null);

  return (
    <div className="container">
      <div className="diagramwrapper">
        <div className="codebox">
          {props.code.map((code, index) => (
            <div
              className={clicked === index ? 'clicked' : 'notclicked'}
              onClick={() => {
                setClicked(index);
              }}
              key={index}
            >
              <p>{code.code}</p>
            </div>
          ))}
        </div>
        <div className="arrow">
          {clicked !== null && (
            <div className={props.images[clicked].className}>
              <img
                src={props.images[clicked].src}
                alt={props.images[clicked].alt}
              />
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
