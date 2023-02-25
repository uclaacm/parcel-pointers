import '../styles/NavButtons.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PageOrder } from '../types/globalTypes';
export interface NavProps {
  page: number;
}

export default function NavButtons(props: NavProps): JSX.Element {
  const pageSelect = PageOrder;
  return (
    <div>
      <button
        onClick={() => (window.location.href = pageSelect[props.page - 1])}
        className="previous"
      >
        <ArrowBackIosNewIcon fontSize="large" />
        <span className="previous-text">Previous</span>
      </button>
      <button
        onClick={() => (window.location.href = pageSelect[props.page + 1])}
        className="next"
      >
        <span className="next-text">Next</span>
        <ArrowForwardIosIcon fontSize="large" />
      </button>
    </div>
  );
}
