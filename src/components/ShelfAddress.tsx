import { useState } from 'react';
import '../styles/ShelfAddress.scss';

export default function SomeButton(num: { num: number }): JSX.Element {
  const [correct, setCorrect] = useState(false);
  const handleClick = () => {
    setCorrect(true);
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
            fill={correct ? 'lime' : '#C4C4C4'}
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
            {num.num}
          </text>
        </g>
      </svg>
    </button>
  );
}
