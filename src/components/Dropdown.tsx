import '../styles/Dropdown.scss';
import { useState } from 'react';


export interface Value {
    id: number;
    name: string;
    displayName: string;
}

export interface DropdownProps {
    options: Value[];
}

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

    const [value, setValue] = useState({id: -1, name: 'null', displayName: 'Select'});
    const [showOptions, setShowOptions] = useState(false);

    const selectOption = (newValue: Value) => {
        setValue(newValue);
        setShowOptions(false);
    };
    return (
        <div className="selectdiv">
            <div onClick={() => setShowOptions(!showOptions)} className="select">
                <li className={'filler ' + ((value.id == -1) ? 'default': '')}> {value.displayName} </li>
            </div>
            <div className="arrow">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L7 7L0.999999 1" stroke="#868686" strokeLinecap="round"/>
                </svg>
            </div>
            <div className={'options ' + (!showOptions ? 'hidden': '')}>
                {props.options.map(({id, name, displayName}, index) => <span key={index} onClick={() => selectOption({id, name, displayName})} className={'option ' + ((value.name == name) && 'selected')}>{displayName}</span>)}
            </div>
        </div>
    );
}
