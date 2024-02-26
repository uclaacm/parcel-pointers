import '../styles/Sidebar.scss';
import '../styles/global.scss';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SetStateAction, useState, Dispatch, useRef, useEffect } from 'react';
import { PageURLs } from '../types/globalTypes';

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
      link: PageURLs.LESSON_1,
    },
    {
      name: '2. Introducing pointers',
      link: PageURLs.LESSON_2,
    },
    {
      name: '3. Assigning a value to pointers',
      link: PageURLs.LESSON_3,
    },
    {
      name: '4. Dereferencing pointers',
      link: PageURLs.LESSON_4,
    },
    {
      name: '5. Reassigning the value pointed to',
      link: PageURLs.LESSON_5,
    },
    {
      name: '6. Reassigning pointers',
      link: PageURLs.LESSON_6,
    },
    {
      name: '7. Arrays and pointer arithmetic',
      link: PageURLs.LESSON_7,
    },
    {
      name: '8. References vs pointers',
      link: PageURLs.LESSON_8,
    },
    {
      name: '9. Pointers in Linked Lists',
      link: PageURLs.LESSON_9,
    },
    {
      name: '10. Dynamic Memory Allocation',
      link: PageURLs.LESSON_10,
    },
  ];
  const exerciseList = [
    {
      name: '1. Memory Addresses',
      link: PageURLs.EXERCISE_1,
    },
    {
      name: '2. Creating Pointers',
      link: PageURLs.EXERCISE_2,
    },
    {
      name: '3. Dereferencing Pointers',
      link: PageURLs.EXERCISE_3,
    },
    {
      name: '4. Creating Pointers',
      link: PageURLs.EXERCISE_4,
    },
    {
      name: '5. Passing Confusion',
      link: PageURLs.EXERCISE_5,
    },
    {
      name: '6. Linking Objects with Pointers',
      link: PageURLs.EXERCISE_6,
    },
  ];
  const hiddenX = -357;
  const showX = 0;
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close the menu if clicked on outside of Sidebar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        props.showMenu == true &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Element)
      ) {
        props.setShowMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside); // Bind the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Unbind the event listener on clean up
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
        <a href={PageURLs.POINTER_MOTIVATION}>Why Pointers?</a>
      </div>
      <div className="dropdown-header">
        <a href={PageURLs.DEMO}>Demo</a>
      </div>
      <Dropdown title="Lessons" list={lessonList} />
      <Dropdown title="Exercises" list={exerciseList} />
      <div className="dropdown-header">
        <a href={PageURLs.CONCLUSION}>Conclusion</a>
      </div>
    </div>
  );
}
