import '../styles/Sidebar.scss';
import '../styles/global.scss';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SetStateAction, useState, Dispatch, useRef, useEffect, RefObject } from 'react';

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
    <div>
      <div
        className="dropdown-header"
        onClick={() => setExpand(!expand)}
        style={{ backgroundColor: expand ? '#FEC9004D' : 'transparent' }}
      >
        <div
          className="dropdown-header-selected"
          style={{ visibility: expand ? 'visible' : 'hidden' }}
        />
        <span>
          <div>{props.title}</div>
          <div>
            {!expand ? (
              <ExpandMoreIcon fontSize="large" style={{ paddingTop: '5px' }} />
            ) : (
              <ExpandLessIcon fontSize="large" style={{ paddingTop: '5px' }} />
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
            <div key={index} style={{ marginBottom: '14px' }}>
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
      name: '1. What are memory addresses?',
      link: '/lesson-1',
    },
    {
      name: '2. Introducing pointers',
      link: '/lesson-2',
    },
    {
      name: '3. Assigning a value to pointers',
      link: '/lesson-3',
    },
    {
      name: '4. Dereferencing pointers',
      link: '/lesson-4',
    },
    {
      name: '5. Reassigning the value pointed to',
      link: '/lesson-5',
    },
    {
      name: '6. Reassigning pointers',
      link: '/lesson-6',
    },
    {
      name: '7. Arrays and pointer arithmetic',
      link: '/lesson-7',
    },
    {
      name: '8. References vs pointers',
      link: '/lesson-8',
    },
  ];
  const exerciseList = [
    {
      name: '1. Exercise 1',
      link: '/exercise-1',
    },
    {
      name: '2. Exercise 2',
      link: '/exercise-2',
    },
    {
      name: '3. Exercise 3',
      link: '/exercise-3',
    },
  ];
  const hiddenX = -357;
  const showX = 0;
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close the menu if clicked on outside of Sidebar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (props.showMenu == true && wrapperRef.current && !wrapperRef.current.contains(event.target as Element)) {
        props.setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside); // Bind the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Unbind the event listener on clean up
    };
  }, [wrapperRef, props.showMenu]);

  return (
    <div
      ref={wrapperRef}
      className="sidebar"
      style={{
        transform: props.showMenu
          ? `translate(${showX}px)`
          : `translate(${hiddenX}px)`,
      }}
    >
      <span className="sidebar-header">
        <h2>
          <a href="/">Parcel Pointers</a>
        </h2>
        <button className="close-btn" onClick={() => props.setShowMenu(false)}>
          <CloseIcon fontSize="large" />
        </button>
      </span>
      <div className="dropdown-header">
        <a href="/pointer-motivation">Why Pointers?</a>
      </div>
      <Dropdown title="Lessons" list={lessonList} />
      <Dropdown title="Exercises" list={exerciseList} />
      <div className="dropdown-header">
        <a href="/demo">Demo</a>{/* TODO: delete me before production! */}
      </div>
      <div className="dropdown-header">
        <a href="/error">Error</a>{/* TODO: delete me before production! */}
      </div>

    </div>
  );
}
