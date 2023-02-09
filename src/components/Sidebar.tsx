import '../styles/Sidebar.scss';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SetStateAction, useState, Dispatch } from 'react';

// TODO: fix vertical alignment of headers
// TODO: fix active dropdown
// TODO: fix dropdown children spacing
// TODO: fix text animation, weird rn
// TODO: remove <a> styling for links

interface sidebarProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

interface dropdownProps {
  title: string;
  list: { name: string; link: string }[];
}

function Dropdown(props: dropdownProps): JSX.Element {
  const [expand, setExpand] = useState(false);
  return (
    <div style={{ backgroundOrigin: 'content-box' }}>
      <div
        className="dropdown-header"
        onClick={() => setExpand(!expand)}
        style={{
          cursor: 'pointer',
          backgroundColor: expand ? '#FEC9004D' : 'transparent',
        }}
      >
        <span
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>{props.title}</div>
          <div>
            {!expand ? (
              <ExpandMoreIcon fontSize="large" />
            ) : (
              <ExpandLessIcon fontSize="large" />
            )}
          </div>
        </span>
      </div>
      <div
        className="dropdown-children"
        style={{ display: expand ? 'block' : 'none' }}
      >
        {props.list.map(function (elem, index) {
          return (
            <div key={index}>
              <a href={elem.link}>{elem.name}</a>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Sidebar(props: sidebarProps): JSX.Element {
  const lessonList = [
    {
      name: 'Lesson 1',
      link: '#lesson-1',
    },
    {
      name: 'Lesson 2',
      link: '#lesson-2',
    },
    {
      name: 'Lesson 3',
      link: '#lesson-3',
    },
  ];

  const exampleList = [
    {
      name: 'Example 1',
      link: '#example-1',
    },
    {
      name: 'Example 2',
      link: '#example-2',
    },
    {
      name: 'Example 3',
      link: '#example-3',
    },
  ];

  return (
    <div className="sidebar" style={{ width: props.showMenu ? 357 : 0 }}>
      {/* <div className="sidebar-container"> */}
      <span
        className="sidebar-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: 35,
        }}
      >
        <h2 style={{ cursor: 'pointer' }}>Parcel Pointers</h2>
        <button className="close-btn" onClick={() => props.setShowMenu(false)}>
          <CloseIcon fontSize="large" />
        </button>
      </span>
      <Dropdown title="Lessons" list={lessonList} />
      <Dropdown title="Examples" list={exampleList} />
    </div>
    // </div>
  );
}
