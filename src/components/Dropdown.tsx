import '../styles/Dropdown.scss';
import { useState, useEffect } from 'react';
import DropdownArrow from '../../public/DropdownArrow.svg';

export interface Value {
  id: number;
  name: string;
  displayName: string;
}

export interface DropdownProps {
  options: Value[];
  correctAnswer: boolean[];
  index: number;
}

// ids of current choices
const answer_key = [2, 3, 3, 2]; // will likely need to refactor this in the future

/**
 * Creates a selectable dropdown for a list of available options.
 *
 * @param id - Unique identifier for the option `[0, inf)`.
 * @param name - The value of the option.
 * @param displayName - The value of the option for display only (sometimes identical to `name`).
 * @example
 * See the following valid usage(s):
 * ```ts
 * <Dropdown options={[
            {id: 1, name: "1", displayName: "1"},
            {id: 2, name: "2", displayName: "2"},
            {id: 3, name: "3", displayName: "3"}]}/>
* <Dropdown options={[{id: 86, name: "toyota", displayName: "Toyota"}}/>
 * ```
 *
 */
export default function Dropdown(props: DropdownProps): JSX.Element {
  const cache = window.localStorage.getItem('answers');

  let state = {
    id: -1,
    name: 'null',
    displayName: 'Select',
  };

  let cachedAnswers = [state, state, state, state];

  if (cache !== null) {
    cachedAnswers = JSON.parse(cache);
    state = cachedAnswers[props.index];
  }

  const [value, setValue] = useState(state);

  const [showOptions, setShowOptions] = useState(false);

  const selectOption = (newValue: Value) => {
    cachedAnswers[props.index] = newValue;
    window.localStorage.setItem('answers', JSON.stringify(cachedAnswers));
    setValue(newValue);
    setShowOptions(false);
  };

  useEffect(() => {
    const checkAnswer = (id: number, index: number) => {
      if (id == answer_key[index]) {
        props.correctAnswer[index] = true;
      } else {
        props.correctAnswer[index] = false;
      }
    };
    checkAnswer(value.id, props.index);
  }, [value, props.correctAnswer]);

  return (
    <div className="selectdiv">
      <div onClick={() => setShowOptions(!showOptions)} className="select">
        <li className={'filler ' + (value.id == -1 ? 'default' : '')}>
          {' '}
          {value.displayName}{' '}
        </li>
        <img
          className="dropdown-arrow"
          src={DropdownArrow}
          alt="dropdown-arrow"
        ></img>
      </div>
      <div className={'options ' + (!showOptions ? 'hidden' : '')}>
        {props.options.map(({ id, name, displayName }, index) => (
          <span
            key={index}
            onClick={() => selectOption({ id, name, displayName })}
            className={'option ' + (value.name == name && 'selected')}
          >
            {displayName}
          </span>
        ))}
      </div>
    </div>
  );
}
