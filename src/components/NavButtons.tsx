import '../styles/NavButtons.scss';
import BackArrow from '../../public/BackArrow.png';
import NextArrow from '../../public/NextArrow.png';
export interface NavProps {
  page: number
}

export default function NavButtons(props: NavProps): JSX.Element {
  const pageSelect = ['/', '/demo', '/lesson-1', '/lesson-2', '/lesson-3'];
  return (
    <div >
      <a href={pageSelect[props.page-1]} className="previous"><img src={BackArrow}></img></a>
      <div className="previous-text">Previous</div>
      <div className="next-text">Next</div>
      <a href={pageSelect[props.page+1]} className="next"><img src={NextArrow}></img></a>
    </div>
  );
}