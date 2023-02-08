import '../styles/Sidebar.scss';
import { SetStateAction, useState, Dispatch } from 'react';

// interface SidebarProps {
//   showMenu: {showMenu: boolean};
//   setShowMenu?: Dispatch<SetStateAction<boolean>>;
// }

export default function Sidebar(props: { showMenu: boolean, setShowMenu: Dispatch<SetStateAction<boolean>> }): JSX.Element {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div id="Sidebar" style={{ width: props.showMenu ? 250 : 0 }}>
      <button 
        id="sidebar"
        onClick={() => props.setShowMenu(false)}
      >X</button>
      <h2>Parcel Pointers</h2>
      <a href="/">Home</a>
      <a href="/demo">Demo</a>
      <button className="dropdown-btn" onClick={() => setDropDown(!dropDown)}>
        Lessons &#9660;
      </button>
      <div
        className="dropdown-container"
        style={{ display: dropDown ? 'block' : 'none' }}
      >
        <a href="/lesson-1">Lesson 1</a>
        <a href="#">Lesson 2</a>
        <a href="#">Lesson 3</a>
      </div>
      <a href="/Error">Error</a>
    </div>
  );
}
