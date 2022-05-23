import { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/Sidebar.scss';

const SideBarWrap = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <button
        className="openbtn"
        onClick={() => setShowMenu(!showMenu)}
        style={{ left: showMenu ? 250 : 0 }}
      >
        ☰
      </button>
      <Sidebar showMenu={showMenu}></Sidebar>
    </div>
  );
};

export default SideBarWrap;
