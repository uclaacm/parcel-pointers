import { FC } from 'react';
import '../styles/Exercise5.scss';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import RunCode from '../components/RunCode';
import SlideShow from '../components/SlideShow';
import Terminal from '../components/Terminal';
import { HeaderSections } from '../types/globalTypes';

const code1 = `void dream1(int a){
  a+=1;
}`;
const code2 = `void dream2(int &a){
  a+=2;
}`;
const code3 = `void dream3(int *a){
  *a+=3;
}`;
const code4 = `void dream4(int *a){
  int b = 5;
  a = &b;
  *a+=4;
}`;

const questions1 = [
  {
    question: 'The input is passed by?',
    options: ['value', 'reference', 'pointer'],
    answer: 'value',
    answerText: new Map([
      [
        'value',
        'Correct! Nothing special is happening, so it is pass by value.',
      ],
      ['reference', 'Not quite! There is no & sign before the variable a.'],
      ['pointer', 'There is no * sign before the variable a.'],
    ]),
  },
  {
    question:
      'When we call the function dream1 with variable num, will num be changed?',
    options: ['No', 'Yes'],
    answer: 'No',
    answerText: new Map([
      ['Yes', 'Correct! The function will only change the copy of num.'],
      [
        'No',
        'Not quite! When a variable is passed by value, the function does not affect the variable.',
      ],
    ]),
  },
];
const questions2 = [
  {
    question: 'The input is passed by?',
    options: ['value', 'reference', 'pointer'],
    answer: 'reference',
    answerText: new Map([
      [
        'value',
        'Correct! The & in the function parameter signals pass by reference.',
      ],
      ['reference', 'Not quite! There is an & sign before the variable a.'],
      ['pointer', 'Not quite! There is an & sign before the variable a.'],
    ]),
  },
  {
    question:
      'When we call the function dream2 with variable num, will num be changed?',
    options: ['No', 'Yes'],
    answer: 'Yes',
    answerText: new Map([
      [
        'Yes',
        'Correct! The change made to "a" inside the function is reflected in the variable num.',
      ],
      [
        'No',
        'Not quite!  The variable is passed by reference, so the function can modify it.',
      ],
    ]),
  },
];
const questions3 = [
  {
    question: 'The input is passed by?',
    options: ['value', 'reference', 'pointer'],
    answer: 'pointer',
    answerText: new Map([
      ['value', 'Not quite! There is * in the function parameter.'],
      ['reference', 'Not quite! There is * in the function parameter.'],
      [
        'pointer',
        'Correct! The * in the function parameter signals pass by pointer.',
      ],
    ]),
  },
  {
    question:
      'When we call the function dream1 with variable num, will num be changed?',
    options: ['No', 'Yes'],
    answer: 'Yes',
    answerText: new Map([
      [
        'No',
        'Not quite! What pointer “a”  points to, which is num, is being changed.',
      ],
      [
        'Yes',
        'Correct! What pointer “a”  points to, which is num, is being changed.',
      ],
    ]),
  },
];
const questions4 = [
  {
    question: 'The input is passed by?',
    options: ['value', 'reference', 'pointer'],
    answer: 'pointer',
    answerText: new Map([
      ['value', 'Not quite! There is * in the function parameter.'],
      ['reference', 'Not quite! There is * in the function parameter.'],
      [
        'pointer',
        'Correct! The * in the function parameter signals pass by pointer.',
      ],
    ]),
  },
  {
    question:
      'When we call the function dream4 with variable num, will num be changed?',
    options: ['No', 'Yes'],
    answer: 'No',
    answerText: new Map([
      [
        'No',
        'Correct!  When “a” is dereferenced, it points to b instead of “num”, so the change of value has nothing to do with num.',
      ],
      [
        'Yes',
        'Not quite! Although “a” is dereferenced, it does not point to “num” anymore.',
      ],
    ]),
  },
];
const questions5 = [
  {
    question: 'After Pipi runs the main function, what is the value of a?',
    options: ['20', '80'],
    answer: '80',
    answerText: new Map([
      [
        '80',
        `Correct! The "&" before the "num" variable in the "quadruple" function 
      definition shows that the argument is passed by reference.
      The change made to num inside the function is reflected in the variable a.`,
      ],
      [
        '20',
        `Not quite! The "&" before the "num" variable in the "quadruple"
     function definition shows that the argument is passed by reference.`,
      ],
    ]),
  },
  {
    question: 'After Pipi runs the main function, what is the value of b?',
    options: ['20', '40'],
    answer: '20',
    answerText: new Map([
      [
        '20',
        `Correct! The function double takes its parameter by value, 
      meaning it operates on a copy of b. Changes within the double 
      function do not affect the original value of b.`,
      ],
      [
        '40',
        `Not quite! Note that this is not pass by reference or pass by pointer.
      We are passing b normally, the function makes a copy of b, and the copy 
      is being modified.`,
      ],
    ]),
  },
  {
    question: 'After Pipi runs the main function, what is the value of b?',
    options: ['20', '60'],
    answer: '60',
    answerText: new Map([
      [
        '60',
        `Correct! We pass a pointer to the triple function.
      The function makes a copy of that pointer, dereferences it,
       and modifies the value it points to.`,
      ],
      [
        '20',
        `Not Quite! The function takes a pointer and modifies the value the
      pointer points to by dereferencing it.`,
      ],
    ]),
  },
];

const codeblock = `
#include <iostream>

void quadruple (int &num){
     num *= 4;
}

void double(int x) {
    x *=  2;
}

void triple (int* money){
     *money *= 3;
}


int main() {
    int a = 20;
    int b = 20;
    int c = 20
    quadruple(a);
    double (b);
    triple(&c);
}
`;

const Exercise5: FC = () => {
  const passingCode = [];
  passingCode.push(
    <RunCode key={1} questions={questions1} check={true} displayText={code1} />
  );
  passingCode.push(
    <RunCode key={2} questions={questions2} check={true} displayText={code2} />
  );
  passingCode.push(
    <RunCode key={3} questions={questions3} check={true} displayText={code3} />
  );
  passingCode.push(
    <RunCode key={4} questions={questions4} check={true} displayText={code4} />
  );

  return (
    <>
      <AppWrapper section={HeaderSections.EXERCISE_5}>
        <div className="page-wrapper">
          <h1>Exercise 5: Passing Confusion</h1>
          <p>
            For this exercise, you will be passing parameters by value,
            reference, and pointer and examining the difference between these.
            Pipi is looking at a bunch of code and doesn&apos;t understand what
            is going on! Help Pipi find the correct solution.
          </p>
          <h2>
            Pipi now wants to replace the basketball with a soccer ball. What is
            the corresponding code to do this?
          </h2>
          <SlideShow images={passingCode}></SlideShow>
          <div className="exercise5-div">
            <Terminal code={codeblock}></Terminal>
            <RunCode
              questions={questions5}
              check={true}
              displayText={''}
              styles={{ background: 'none' }}
            ></RunCode>
          </div>
        </div>
      </AppWrapper>
      <NavButtons page={18}></NavButtons>
    </>
  );
};

export default Exercise5;
