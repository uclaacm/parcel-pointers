import '../styles/Sidebar.scss';

export default function Sidebar(showMenu: { showMenu: any }): JSX.Element {
  return (
    <div id="Sidebar" style={{ width: showMenu.showMenu ? 250 : 0 }}>
      <a href="/">Home</a>
      <a href="/demo">Demo</a>
      <a href="/lesson-1">Lesson 1</a>
      <a href="/Error">Error</a>
    </div>
  );
}
