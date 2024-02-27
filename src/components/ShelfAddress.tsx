import { useState, SetStateAction, Dispatch } from 'react';
import '../styles/ShelfAddress.scss';

interface ShelfAddressProps {
  num: number;
  correctAddress: boolean;
  disabled: boolean;
  handleCorrect: Dispatch<SetStateAction<boolean>>;
  handleIncorrect: Dispatch<SetStateAction<boolean>>;
}

export default function ShelfAddress(props: ShelfAddressProps): JSX.Element {
  const [color, setColor] = useState('#C4C4C4');
  const [hover, setHover] = useState(false);
  const handleClick = async () => {
    if (color != '#C4C4C4') return;
    if (props.correctAddress) {
      props.handleCorrect(true);
      setColor('#31A74B');
    } else {
      props.handleIncorrect(true);
      setColor('red');
    }
  };
  return (
    <button
      disabled={props.disabled}
      className={`address${hover ? ' hover' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <rect
            x="1.3"
            y="1.3"
            width="38"
            height="38"
            fill={color}
            stroke="black"
          />
          <text
            x="50%"
            y="60%"
            fontFamily="Verdana"
            fontSize="20"
            fill="black"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {props.num}
          </text>
        </g>
      </svg>
    </button>
  );
}
