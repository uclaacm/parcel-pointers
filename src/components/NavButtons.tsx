import '../styles/NavButtons.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PageOrder } from '../types/globalTypes';
export interface NavProps {
  page: number;
  noPrev?: boolean;
  noNext?: boolean;
}

export default function NavButtons(props: NavProps): JSX.Element {
  const pageSelect = PageOrder;
  return (
    <div>
      {!props.noPrev && (
        <button
          onClick={() => (window.location.href = pageSelect[props.page - 1])}
          className="previous"
        >
          <ArrowBackIosNewIcon fontSize="large" />
          <span className="previous-text">Previous</span>
        </button>
      )}
      {!props.noNext && (
        <button
          onClick={() => (window.location.href = pageSelect[props.page + 1])}
          className="next"
        >
          <span className="next-text">Next</span>
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      )}
    </div>
  );
}
