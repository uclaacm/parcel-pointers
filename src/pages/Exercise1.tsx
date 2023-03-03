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
          <h3>
            Let&apos;s say Pipi wants to go to{' '}
            <span className="highlight">Box B</span>.
          </h3>
          <div className="questions">
            <Question
              correct="Correct! Now Pipi needs to..."
              incorrect="Not quite. Think about ... Please try again."
            >
              <p className="question-text">
                The address of the Box B is{' '}
                <span>{/* TODO: insert dropdown*/}</span>
              </p>
            </Question>
            <Question
              correct="Correct! Now Pipi needs to..."
              incorrect="Not quite. Think about ... Please try again."
            >
              <p className="question-text">
                Pipi needs to move <span>{/* TODO: insert dropdown*/}</span>{' '}
                addresses from her current position to get to Box B.
              </p>
            </Question>
          </div>
          <h3>
            What if Pipi now wants to go to{' '}
            <span className="highlight">Box E</span> from her current position?
          </h3>
          <div className="questions">
            <Question
              correct="Correct! Now Pipi needs to..."
              incorrect="Not quite. Think about ... Please try again."
            >
              <p className="question-text">
                The address of the Box E is{' '}
                <span>{/* TODO: insert dropdown*/}</span>
              </p>
            </Question>
            <Question
              correct="Correct! Now Pipi needs to..."
              incorrect="Not quite. Think about ... Please try again."
            >
              <p className="question-text">
                Pipi needs to move <span>{/* TODO: insert dropdown*/}</span>{' '}
                addresses from her current position to get to Box E.
              </p>
            </Question>
          </div>
          <NavButtons page={12}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Exercise1;
