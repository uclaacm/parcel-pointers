import { FC, useState } from 'react';
import Exercise1Diagram from '../../public/Exercise1Diagram.png';
import AppWrapper from '../components/AppWrapper';
import Dropdown from '../components/Dropdown';
import NavButtons from '../components/NavButtons';
import Question from '../components/Question';
import { HeaderSections } from '../types/globalTypes';
import '../styles/Exercise1.scss';

const Exercise1: FC = () => {
  let answers = [false, false, false, false];
  const cachedAnswers = window.localStorage.getItem('isCorrect');
  if (cachedAnswers !== null) answers = JSON.parse(cachedAnswers);

  const [correctAnswer] = useState(answers);
  return (
    <>
      <AppWrapper section={HeaderSections.EXERCISE_1}>
        <div className="page-wrapper">
          <h1>Memory Addresses</h1>
          <p>
            Pipi has forgotten the address of the boxes in the warehouse! Help
            them find the correct addresses by answering the following
            questions.
          </p>
          <h2>Instructions</h2>
          <p>Use the diagram below to answer the following questions.</p>
          <div className="exercise-1-diagram diagram">
            <img src={Exercise1Diagram} alt="Excercise 1 Diagram" />
          </div>
          <h2>
            {' '}
            Let&apos;s say Pipi wants to go to{' '}
            <span className="highlight">Box b</span>
          </h2>
          <div className="questions">
            <Question
              correct="Correct! This is the first address for box b, which is what pointers use to find variables in memory. Now Pipi needs to calculate how much they need to move to get there."
              incorrect="Not Quite. Remember that pointers start with the first address of a variable, so we want to start with the first adress of box b. Please try again."
              correct_answer={correctAnswer}
              index={0}
            >
              <p className="question-text">
                The address of the Box b is&nbsp;
                <span className="dropdown-between-text-wrapper">
                  <span className="dropdown-wrapper">
                    <Dropdown
                      options={[
                        { id: 1, name: '10', displayName: '10' },
                        { id: 2, name: '11', displayName: '11' },
                        { id: 3, name: '12', displayName: '12' },
                        { id: 4, name: '13', displayName: '13' },
                      ]}
                      correctAnswer={correctAnswer}
                      index={0}
                    />
                  </span>
                </span>{' '}
                .
              </p>
            </Question>
            <Question
              correct="Correct! Pipi needs to move from address 2 to address 11. Now they need to go to a different box."
              incorrect="Not Quite. Pipi needs to move from address 2 to address 11. Please try again."
              correct_answer={correctAnswer}
              index={1}
            >
              <p className="question-text">
                Pipi needs to move{' '}
                <span className="dropdown-between-text-wrapper">
                  <span className="dropdown-wrapper">
                    <Dropdown
                      options={[
                        { id: 1, name: '7', displayName: '7' },
                        { id: 2, name: '8', displayName: '8' },
                        { id: 3, name: '9', displayName: '9' },
                      ]}
                      correctAnswer={correctAnswer}
                      index={1}
                    />
                  </span>
                </span>{' '}
                addresses from their current position to get to Box b.
              </p>
            </Question>
          </div>
          <h2>
            What if Pipi now wants to go to{' '}
            <span className="highlight">Box e</span> from their current
            position?
          </h2>
          <div className="questions">
            <Question
              correct="Correct! This is the first address for box e, which is what pointers use to find variables in memory. Now Pipi needs to calculate how much they need to move to get there."
              incorrect="Not Quite. Remember that pointers start with the first address of a variable, so we want to start with the first adress of box b. Please try again."
              correct_answer={correctAnswer}
              index={2}
            >
              <p className="question-text">
                The address of the Box e is&nbsp;
                <span className="dropdown-between-text-wrapper">
                  <span className="dropdown-wrapper">
                    <Dropdown
                      options={[
                        { id: 1, name: '20', displayName: '20' },
                        { id: 2, name: '21', displayName: '21' },
                        { id: 3, name: '22', displayName: '22' },
                        { id: 4, name: '23', displayName: '23' },
                      ]}
                      correctAnswer={correctAnswer}
                      index={2}
                    />
                  </span>
                </span>{' '}
                .
              </p>
            </Question>
            <Question
              correct="Correct! Pipi needs to move from address 11 to address 22. Thanks to you, Pipi found all of the boxes correctly!"
              incorrect="Not Quite. Pipi needs to move from address 11 to address 22. Please try again."
              correct_answer={correctAnswer}
              index={3}
            >
              <p className="question-text">
                Pipi needs to move{' '}
                <span className="dropdown-between-text-wrapper">
                  <span className="dropdown-wrapper">
                    <Dropdown
                      options={[
                        { id: 1, name: '10', displayName: '10' },
                        { id: 2, name: '11', displayName: '11' },
                        { id: 3, name: '12', displayName: '12' },
                      ]}
                      correctAnswer={correctAnswer}
                      index={3}
                    />
                  </span>
                </span>{' '}
                addresses from their current position to get to Box e.
              </p>
            </Question>
          </div>
          <NavButtons page={14}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Exercise1;
