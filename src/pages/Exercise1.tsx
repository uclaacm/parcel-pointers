import { FC } from 'react';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import Question from '../components/Question';
import { HeaderSections } from '../types/globalTypes';

const Exercise1: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.EXERCISE_1}>
        <div className="page-wrapper">
          <h1>Memory Addresses</h1>
          <p>
            Pipi has forgotten the address of the boxes in the warehouse! Help
            her find the correct addresses by answering the following questions.
          </p>
          <h2>Instructions</h2>
          <p>Use the diagram below to answer the following questions.</p>
          <div className="diagram">{/* TODO: insert diagram here */}</div>
          <h2>
            {' '}
            Let&apos;s say Pipi wants to go to{' '}
            <span className="highlight">Box b</span>
          </h2>
          <div className="questions">
            <Question
              correct="Correct! Now Pipi needs to..."
              incorrect="Not quite. Think about ... Please try again."
            >
              <p className="question-text">
                The address of the Box b is{' '}
                <span>{/* TODO: insert dropdown*/}</span>
              </p>
            </Question>
            <Question
              correct="Correct! Now Pipi needs to..."
              incorrect="Not quite. Think about ... Please try again."
            >
              <p className="question-text">
                Pipi needs to move <span>{/* TODO: insert dropdown*/}</span>{' '}
                addresses from her current position to get to Box b.
              </p>
            </Question>
          </div>
          <h2>
            What if Pipi now wants to go to{' '}
            <span className="highlight">Box e</span> from her current position?
          </h2>
          <div className="questions">
            <Question
              correct="Correct! Now Pipi needs to..."
              incorrect="Not quite. Think about ... Please try again."
            >
              <p className="question-text">
                The address of the Box e is{' '}
                <span>{/* TODO: insert dropdown*/}</span>
              </p>
            </Question>
            <Question
              correct="Correct! Now Pipi needs to..."
              incorrect="Not quite. Think about ... Please try again."
            >
              <p className="question-text">
                Pipi needs to move <span>{/* TODO: insert dropdown*/}</span>{' '}
                addresses from her current position to get to Box e.
              </p>
            </Question>
          </div>
          {/*TODO later: change index back to 12*/}
          <NavButtons page={8}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Exercise1;
