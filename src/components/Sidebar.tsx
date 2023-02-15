import '../styles/Sidebar.scss';
import { useState } from 'react';

export default function Sidebar(showMenu: { showMenu: boolean }): JSX.Element {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div id="Sidebar" style={{ width: showMenu.showMenu ? 250 : 0 }}>
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
        <a href="/lesson-2">Lesson 2</a>
        <a href="/lesson-3">Lesson 3</a>
      </div>
      <a href="/Error">Error</a>
    </div>
  );
}
