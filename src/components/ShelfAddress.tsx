import { useState, SetStateAction, Dispatch } from 'react';
import '../styles/ShelfAddress.scss';

interface ShelfAddressProps {
  num: number;
  handleCorrect: Dispatch<SetStateAction<boolean>>;
}

export default function ShelfAddress(props: ShelfAddressProps): JSX.Element {
  const [color, setColor] = useState('#C4C4C4');
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handleClick = async () => {
    if (color != '#C4C4C4') return;
    if (props.num == 15) {
      props.handleCorrect(true);
      setColor('green');
      await timeout(2500);
      props.handleCorrect(false);
    } else {
      setColor('red');
    }
  };
  return (
    <button className={'address'} onClick={handleClick}>
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <rect
            x="1.26489"
            y="1.44511"
            width="38.3946"
            height="38.3946"
            fill={color}
            stroke="black"
          />
          <text
            x="49%"
            y="49%"
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
