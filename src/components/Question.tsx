import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../styles/Question.scss';

interface QuestionProps {
  children?: JSX.Element | JSX.Element[];
  complete: boolean;
  correct: string;
  incorrect: string;
}

function Question(props: QuestionProps): JSX.Element {
  return (
    <div className="question">
      <span className="question-text-wrapper">
        <CheckCircleIcon fontSize="large" className="icon" />
        {props.children}
        {/* TODO: conditionally display check/arrow here */}
      </span>
      {/* TODO: conditionally display icon + props.correct or props.incorrect */}
    </div>
  );
}

export default Question;
