import { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/Sidebar.scss';

const SideBarWrap = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <button
        className="openbtn"
        onClick={() => setShowMenu(!showMenu)}
        id="sidebar"
      >
        ☰
      </button>
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu}></Sidebar>
    </div>
  );
};

export default SideBarWrap;
