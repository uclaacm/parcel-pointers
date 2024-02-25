import '../styles/Grid.scss';
import { CSSProperties, Dispatch, SetStateAction } from 'react';
import ShelfAddress from './ShelfAddress';

export interface GridProps {
  size: number;
  addressNums: number[];
  itemSpaceArray: number[];
  handleCorrect: Dispatch<SetStateAction<boolean>>;
  handleIncorrect: Dispatch<SetStateAction<boolean>>;
  style?: CSSProperties;
  children?: JSX.Element[];
}

export default function Grid(props: GridProps): JSX.Element {
  const itemArray = props.itemSpaceArray.map((i) => `${i * props.size}px`);
  const shelfArray = Array(props.addressNums.length).fill(`${props.size}px`);
  const itemStyles = {
    gridTemplateColumns: itemArray.join(' '),
  };
  const shelfStyles = {
    gridTemplateColumns: shelfArray.join(' '),
  };
  return (
    <div className="grid-container" style={{ ...props.style }}>
      <div className="item-container" style={{ ...itemStyles }}>
        {props.children}
      </div>
      <div className="item-container" style={{ ...shelfStyles }}>
        {props.addressNums.map((num) => (
          <ShelfAddress
            key={null}
            num={num}
            handleCorrect={props.handleCorrect}
            handleIncorrect={props.handleIncorrect}
          ></ShelfAddress>
        ))}
      </div>
    </div>
  );
}
