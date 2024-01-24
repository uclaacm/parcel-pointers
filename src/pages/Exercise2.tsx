import { FC } from 'react';
import Exercise2Diagram1 from '../../public/Exercise2Diagram1.svg';
import Exercise2Diagram2 from '../../public/Exercise2Diagram2.svg';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import RunCode from '../components/RunCode';
import { HeaderSections } from '../types/globalTypes';
import '../styles/Exercise2.scss';

const questions1 = [
  {
    options: [
      'Basketball &ptr = &basketball;',
      'Basketball *ptr = &basketball;',
      'Basketball *ptr = *basketball;',
      'Basketball *ptr = *basketball;',
    ],
    answer: 'Basketball *ptr = &basketball;',
    correctText:
      'Correct! The * operator is used to declare a pointer before the equal sign and the & operator is used to get the address of the variable after the equal sign.',
    wrongText: 'Not quite.',
  },
];

const questions2 = [
  {
    options: [
      'char &ptr = *x;',
      'string *ptr = &x;',
      'string *ptr = *x;',
      'char *ptr = &x;',
    ],
    answer: 'string *ptr = &x;',
    correctText:
      'Correct! You can actually declare it as either a char or string pointer.',
    wrongText: 'Not quite.',
  },
];

const questions3 = [
  {
    options: [
      'Basketball **basketballPtrPtr = basketballPtr;',
      'Basketball **basketballPtrPtr = &basketballPtr;',
      'Basketball *basketballPtrPtr = *basketballPtr;',
      'Basketball *basketballPtrPtr = basketballPtr;',
    ],
    answer: 'Basketball **basketballPtrPtr = &basketballPtr;',
    correctText:
      'Correct! You want to take the address of the pointer itself and assign that to a double pointer. Note the double * notation here indicating a double pointer.',
    wrongText: 'Not quite.',
  },
];

const Exercise2: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.EXERCISE_2}>
        <div className="page-wrapper">
          <h1>Creating Pointers</h1>
          <p>
            For this exercise, you will be helping Pipi to put boxes on the
            shelves where they can easily be referenced again later with
            pointers. First, Pipi wants to store a basketball in our warehouse
            so that it can be easily accessed again without needing to carry it
            around everywhere!
          </p>
          <div className="exercise-2-diagram">
            <img src={Exercise2Diagram1} alt="Exercise 2 Diagram" />
          </div>
          <h2>How do we create a pointer to the basketball</h2>
          <div className="exercise2-div">
            <RunCode
              questions={questions1}
              displayText={
                'Basketball basketball; // note that Basketball is a class defined elsewhere'
              }
            />
          </div>
          <p>
            Pipi now has a lightweight pointer to that basketball instead of
            having to carry it around everywhere! Now Pipi wants to also store a
            label for the basketball in another box.
          </p>
          <div className="exercise-2-diagram">
            <img src={Exercise2Diagram2} alt="Exercise 2 Diagram" />
          </div>
          <h2>How do we create a pointer to the basketball string?</h2>
          <div className="exercise2-div">
            <RunCode
              questions={questions2}
              displayText={'string x = “basketball";'}
            />
          </div>
          <p>
            Pipi has pointers for both the basketball and its corresponding
            label, but now they want another pointer to the pointer for the
            basketball! Pipi wants to store that pointer and get another pointer
            to that pointer.
          </p>
          <h2>How do we create a pointer to the basketball pointer?</h2>
          <div className="exercise2-div">
            <RunCode
              questions={questions3}
              displayText={'string x = “basketball";'}
            />
          </div>

          <p>
            Double pointers are not very common, but they can be used in certain
            situations, such as with accessing multidimensional arrays!
          </p>
          <NavButtons page={15}></NavButtons>
        </div>
      </AppWrapper>
    </>
  );
};

export default Exercise2;
