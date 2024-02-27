import { HeaderSections } from '../../types/globalTypes';
import SideBarWrap from '../SidebarWrap';
/**
 * We can use our enum as the specified type that our HeaderProps recieves
 * Type our React Element with an interface
 */
export interface HeaderProps {
  section: HeaderSections;
}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <div id="header">
      <SideBarWrap></SideBarWrap>
      <nav className="nav">
        <div className="debug">{props.section}</div>
      </nav>
    </div>
  );
}
