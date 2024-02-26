import { FC } from 'react';
import '../styles/Exercise4.scss';
import Exercise4Diagram1 from '../../public/Exercise4Diagram1.svg';
import Exercise4Diagram2 from '../../public/Exercise4Diagram2.svg';
import AppWrapper from '../components/AppWrapper';

import NavButtons from '../components/NavButtons';
import RunCode from '../components/RunCode';
import { HeaderSections } from '../types/globalTypes';

const question1 = [
  {
    options: [
      'int b = ptr + 8;',
      'int b = *ptr + 8;',
      'int b = *(ptr + 8);',
      'int b = ptr[8];',
      'int b = *ptr[8];',
    ],
    answers: ['int b = *(ptr + 8);', 'int b = ptr[8];'],
    answerText: new Map([
      [
        'int b = ptr + 8;',
        'Not quite, this would set b equal to the pointer address of 3+8=11.',
      ],
      [
        'int b = *ptr + 8;',
        'Not quite, this would set b equal to the value of the pointer at the current location, which would be garbage since there is no box there, plus 8.',
      ],
      [
        'int b = *(ptr + 8);',
        'Correct! This will move the pointer to address 11 and then dereference it to access box b.',
      ],
      [
        'int b = ptr[8];',
        'Correct! This will move the pointer to address 11 and then dereference it to access box b. Note how the bracket syntax will implicitly dereference the pointer.',
      ],
      [
        'int b = *ptr[8];',
        'Not quite, remember the bracket syntax implicitly dereferences the pointer.',
      ],
    ]),
  },
  {
    options: [
      'int b = ptr + 8;',
      'int b = *ptr + 8;',
      'int b = *(ptr + 8);',
      'int b = ptr[8];',
      'int b = *ptr[8];',
    ],
    answers: ['int b = *(ptr + 8);', 'int b = ptr[8];'],
    answerText: new Map([
      [
        'int b = ptr + 8;',
        'Not quite, this would set b equal to the pointer address of 3+8=11.',
      ],
      [
        'int b = *ptr + 8;',
        'Not quite, this would set b equal to the value of the pointer at the current location, which would be garbage since there is no box there, plus 8.',
      ],
      [
        'int b = *(ptr + 8);',
        'Correct! This will move the pointer to address 11 and then dereference it to access box b.',
      ],
      [
        'int b = ptr[8];',
        'Correct! This will move the pointer to address 11 and then dereference it to access box b. Note how the bracket syntax will implicitly dereference the pointer.',
      ],
      [
        'int b = *ptr[8];',
        'Not quite, remember the bracket syntax implicitly dereferences the pointer.',
      ],
    ]),
  },
];

const question2 = [
  {
    options: ['ptr= *ptr;', 'ptr+= *ptr;', '*ptr = ptr;', '*ptr += ptr;'],
    answers: ['ptr+= *ptr;'],
    answerText: new Map([
      [
        'ptr= *ptr;',
        'Not quite, this will set the pointer to the offset between box b and the next box.',
      ],
      [
        'ptr+= *ptr;',
        'Correct! This will allow Pipi to move the correct amount to the next box.',
      ],
      [
        '*ptr = ptr;',
        'Not quite, this ends up actually assigning box b to hold the pointer to box b!',
      ],
      [
        '*ptr += ptr;',
        'Not quite, this will actually set the address inside box b to the address of the next box!',
      ],
    ]),
  },
];

const question3 = [
  {
    options: [
      'int m = *(ptr + 2 + 5);',
      'int b = *(ptr + 2*ROW_WIDTH+5);',
      'int b = *(ptr + 2+ 5*ROW_WIDTH);',
      'int b = ptr[2][5];',
      'int b = ptr[3][6];',
    ],
    answers: ['int b = *(ptr + 2*ROW_WIDTH+5);', 'int b = ptr[2][5];'],
    answerText: new Map([
      [
        'int m = *(ptr + 2 + 5);',
        'Not quite, this would set m equal to the box at address 9, at which there is no box and there would instead be garbage.',
      ],
      [
        'int b = *(ptr + 2*ROW_WIDTH+5);',
        'Correct! This will correctly move the pointer down 2 rows and over 6 columns to get to address 54. An easy way to check here is to plug in the numbers, where you get 1 + 2*24 + 5 = 54, which is the correct address.',
      ],
      [
        'int b = *(ptr + 2+ 5*ROW_WIDTH);',
        'Not quite, this would move the pointer 6 rows down, which is out of bounds. Note that out of bounds errors are particularly bad with C and C++ because they can cause undefined behavior.',
      ],
      [
        'int b = ptr[2][5];',
        'Correct! This will correctly move the pointer down 2 rows and over 5 columns to get to address 54. An easy way to check here is to plug in the numbers, where you get 1 + 2*24 + 5 = 54, which is the correct address.',
      ],
      [
        'int b = ptr[3][6];',
        'Not quite, remember that C++ indexes array starting at 0!',
      ],
    ]),
  },
  {
    options: [
      'int m = *(ptr + 2 + 5);',
      'int b = *(ptr + 2*ROW_WIDTH+5);',
      'int b = *(ptr + 2+ 5*ROW_WIDTH);',
      'int b = ptr[2][5];',
      'int b = ptr[3][6];',
    ],
    answers: ['int b = *(ptr + 2*ROW_WIDTH+5);', 'int b = ptr[2][5];'],
    answerText: new Map([
      [
        'int m = *(ptr + 2 + 5);',
        'Not quite, this would set m equal to the box at address 9, at which there is no box and there would instead be garbage.',
      ],
      [
        'int b = *(ptr + 2*ROW_WIDTH+5);',
        'Correct! This will correctly move the pointer down 2 rows and over 6 columns to get to address 54. An easy way to check here is to plug in the numbers, where you get 1 + 2*24 + 5 = 54, which is the correct address.',
      ],
      [
        'int b = *(ptr + 2+ 5*ROW_WIDTH);',
        'Not quite, this would move the pointer 6 rows down, which is out of bounds. Note that out of bounds errors are particularly bad with C and C++ because they can cause undefined behavior.',
      ],
      [
        'int b = ptr[2][5];',
        'Correct! This will correctly move the pointer down 2 rows and over 5 columns to get to address 54. An easy way to check here is to plug in the numbers, where you get 1 + 2*24 + 5 = 54, which is the correct address.',
      ],
      [
        'int b = ptr[3][6];',
        'Not quite, remember that C++ indexes array starting at 0!',
      ],
    ]),
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
          <p>Let&apos;s take our example from Exercise 1 here:</p>
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

          <div className="exercise4-div">
            <RunCode
              questions={question1}
              displayText={'Box *ptr; // initialized to point to address 3'}
            />
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
          <div className="exercise4-div">
            <RunCode questions={question2} displayText={''} />
          </div>

          <p>
            By going from box to box, we can see how it is not too hard to
            access these boxes in one dimension, but let&apos;s see now how we
            can access them in multiple dimensions!
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
          <div className="exercise4-div">
            <RunCode
              questions={question3}
              displayText={
                '{\nconst int ROW_WIDTH = 24;  // common constant declaration of the row width\nfor a multi-dimensional array\nBox *ptr = 1; // the pointer starts at address 1'
              }
            />
          </div>
          <p>
            Note that with multi-dimensional arrays, we can only use the bracket
            syntax multiple times if the array was declared as a
            multidimensional array and not a single dimensional array because
            otherwise, the program would not know the width of each row!
          </p>
        </div>
      </AppWrapper>
      <NavButtons page={17}></NavButtons>
    </>
  );
};

export default Exercise4;
