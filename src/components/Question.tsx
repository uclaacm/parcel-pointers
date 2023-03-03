import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import '../styles/Question.scss';

interface QuestionProps {
  children?: JSX.Element | JSX.Element[];
  correct: string;
  incorrect: string;
}

function Question(props: QuestionProps): JSX.Element {
  const [correct, setCorrect] = useState(false);
  const [expand, setExpand] = useState(false);

  return (
    <div className="question">
      <div className="question-container-wrapper">
        <div className="question-wrapper">
          <CheckCircleIcon
            fontSize="large"
            className="icon"
            style={correct ? { color: '#31A74B' } : { color: '#817F7F' }}
          />
          <div className="question-text-wrapper">{props.children}</div>
        </div>
        <div className="question-wrapper">
          {correct ? (
            expand ? (
              <div onClick={() => setExpand(!expand)}>
                <ExpandLessIcon
                  fontSize="large"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ) : (
              <div onClick={() => setExpand(!expand)}>
                <ExpandMoreIcon
                  fontSize="large"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            )
          ) : (
            <button 
              className="check-button" 
              onClick={() => {
                // TODO: check input and set correct accordingly
                setCorrect(!correct); // comment this line to check incorrect text
                setExpand(true);
              }}
            >
              {/* TODO: check is lowercase, fix center padding*/}
              <p className="check-button-text">Check</p>
            </button>
          )}
        </div>
      </div>
      {expand ? (
        correct ? (
          <p className="correct-text">{props.correct}</p>
        ) : (
          <p className="incorrect-text">{props.incorrect}</p>
        )
      ) : (
        ''
      )}
    </div>
  );
}

export default Question;