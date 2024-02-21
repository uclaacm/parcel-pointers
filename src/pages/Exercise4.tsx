import { FC } from 'react';
import '../styles/Exercise4.scss';
import Exercise4Diagram2 from '../../public/Component 12.svg';
import Exercise4Diagram1 from '../../public/Frame 265.svg';
import AppWrapper from '../components/AppWrapper';

import NavButtons from '../components/NavButtons';
import RunCode from '../components/RunCode';
import { HeaderSections } from '../types/globalTypes';

const question = [
  {
    options: [
      '*basketballPtr = soccerBall;',
      'basketballPtr = soccerBall;',
      'basketballPtr = &soccerBall;',
      '&basketballPtr = soccerBall;',
    ],
    answer: '*basketballPtr = soccerBall;',
    correctText:
      'Correct! This correctly dereferences the pointer and sets the basketball to a soccer ball.',
    wrongText: 'Not quite',
  },
];

const Exercise4: FC = () => {
  return (
    <>
      <AppWrapper section={HeaderSections.EXERCISE_4}>
        <div className="page-wrapper">
          <h1>Exercise 4: Creating Pointers</h1>
          <p>
            For this exercise, you will be doing math with pointers to calculate
            the correct points in memory to access. Pipi wants to do arithmetic
            with pointers, but is getting confused with when to dereference and
            when not to! Help Pipi figure out the correct way to do pointer
            arithmetic!
          </p>
          <p>Let’s take our example from Exercise 1 here:</p>
          <div className="exercise-4-diagram">
            <img src={Exercise4Diagram1} alt="Exercise 4 Diagram" />
          </div>
          <p>
            As we know, to get to box b, Pipi has to go to address 11 and move 8
            address spaces to get there from their current position. In order to
            access box b, pipi must move the pointer to it using pointer
            arithmetic.
          </p>
          <h2>
            How can we move the pointer to the address of box b and dereference
            it?
          </h2>

          <div className="exercise3-wrap">
            <div className="exercise3-box"></div>
          </div>
          <p>
            Now that Pipi is at box b, they want to continue searching boxes,
            but does not know which address to go to! Luckily, the number of
            addresses that Pipi needs to move to get to the next box is written
            down inside of box b.
          </p>

          <h2>
            How can we move the pointer to the address that box b contains?
          </h2>
          <div className="exercise3-div">
            <RunCode
              questions={question}
              displayText={
                'SoccerBall soccerBall; // ignore the type difference here'
              }
            />
          </div>

          <p>
            By going from box to box, we can see how it is not too hard to
            access these boxes in one dimension, but let’s see now how we can
            access them in multiple dimensions!
          </p>

          <p>
            Pipi is back on the top shelf of the warehouse and has multiple rows
            of boxes to get to! As we know, multi-dimensional arrays are
            actually the same things as 1-dimensional arrays in memory, it is
            just how we access them that is different!
          </p>

          <div className="exercise-4-diagram">
            <img src={Exercise4Diagram2} alt="Exercise 4 Diagram" />
          </div>

          <p>
            Suppose that Pipi wants to access box m on row 3, column 6, which is
            address 54.
          </p>

          <h2>
            How can we move the pointer to the address of box m and dereference
            it?
          </h2>

          <p>
            Note that with multi-dimensional arrays, we can only use the bracket
            syntax multiple times if the array was declared as a
            multidimensional array and not a single dimensional array because
            otherwise, the program would not know the width of each row!
          </p>
        </div>
      </AppWrapper>
      <NavButtons page={16}></NavButtons>
    </>
  );
};

export default Exercise4;
