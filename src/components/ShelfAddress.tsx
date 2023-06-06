import { useState, SetStateAction, Dispatch } from 'react';
import '../styles/ShelfAddress.scss';

interface ShelfAddressProps {
  num: number;
  handleCorrect: Dispatch<SetStateAction<boolean>>;
}

export default function ShelfAddress(props: ShelfAddressProps): JSX.Element {
  const [color, setColor] = useState('#C4C4C4');
  const handleClick = async () => {
    if (color != '#C4C4C4') return;
    if (props.num == 15) {
      props.handleCorrect(true);
      setColor('green');
    } else {
      setColor('red');
    }
  };
  return (
    <button className={'address'} onClick={handleClick}>
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
