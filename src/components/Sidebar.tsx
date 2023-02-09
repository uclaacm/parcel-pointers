import '../styles/Sidebar.scss';
import { SetStateAction, useState, Dispatch } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface sidebarProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

interface dropdownProps {
  title: string;
  children: { name: string, link: string }[];
}

function Dropdown(props: dropdownProps): JSX.Element {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <div className="dropdown-header" onClick={() => setExpand(!expand)} >
        <span style={{ display: 'flex', justifyContent: "space-between", backgroundColor: expand ? "#FEC9004D" : 'transparent'}} >
          <div>{props.title}</div>
          <div >
            {!expand ? <ExpandMoreIcon fontSize='large' /> : <ExpandLessIcon fontSize='large' />}
          </div>
        </span>
      </div>
      <div
        className="dropdown-children"
        style={{ display: expand ? 'block' : 'none' }}
      >
        {
          props.children.map(function (elem) {
            return (
              <div>
                <a href={elem.link}>{elem.name}</a><br />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default function Sidebar(props: sidebarProps): JSX.Element {
  const lessonChildren = [
    {
      name: "Lesson 1",
      link: "#lesson-1"
    },
    {
      name: "Lesson 2",
      link: "#lesson-2",
    },
    {
      name: "Lesson 3",
      link: "#lesson-3",
    }
  ];

  const exampleChildren = [
    {
      name: "Example 1",
      link: "#example-1"
    },
    {
      name: "Example 2",
      link: "#example-2",
    },
    {
      name: "Example 3",
      link: "#example-3",
    }
  ];

  return (
    <div id="Sidebar" style={{ width: 357/*props.showMenu ? 357 : 0 */ }}>
      <div className='sidebar-container'>
        <span style={{ display: 'flex', justifyContent: "space-between", paddingBottom: 35 }}>
          <a className='title'>Parcel Pointers</a>
          <button className="close-btn" onClick={() => props.setShowMenu(false)}>
            <CloseIcon fontSize='medium' />
          </button>
        </span>
        <Dropdown title="Lessons" children={lessonChildren} />
        <Dropdown title="Examples" children={exampleChildren} />
      </div>
    </div>
  );
}
