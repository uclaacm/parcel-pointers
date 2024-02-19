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
    correctText:
      'Correct! Nothing special is happening, so it is pass by value.',
    wrongText: 'Not quite! There is no & sign before the variable a.',
  },
  {
    question:
      'When we call the function dream1 with variable num, will num be changed?',
    options: ['No', 'Yes'],
    answer: '*basketballPtr = soccerBall;',
    correctText:
      'Correct! The change made to a inside the function is reflected in the variable num.',
    wrongText:
      'Not quite!  The variable is passed by reference, so the function can modify it.',
  },
];
const questions2 = [
  {
    question: 'The input is passed by?',
    options: ['value', 'reference', 'pointer'],
    answer: 'reference',
    correctText:
      'Correct! The & in the function parameter signals pass by reference.',
    wrongText: 'Not quite! There is an & symbol in the function parameter.',
  },
  {
    question:
      'When we call the function dream2 with variable num, will num be changed?',
    options: ['No', 'Yes'],
    answer: 'Yes',
    correctText:
      'Correct! The change made to a inside the function is reflected in the variable num.',
    wrongText:
      'Not quite!  The variable is passed by reference, so the function can modify it.',
  },
];
const questions3 = [
  {
    question: 'The input is passed by?',
    options: ['value', 'reference', 'pointer'],
    answer: 'pointer',
    correctText:
      'Correct! The * in the function parameter signals pass by pointer.',
    wrongText: 'Not quite! There is * in the function parameter.',
  },
  {
    question:
      'When we call the function dream1 with variable num, will num be changed?',
    options: ['No', 'Yes'],
    answer: '*basketballPtr = soccerBall;',
    correctText:
      'Correct! What pointer “a”  points to, which is num, is being changed.',
    wrongText:
      'Not quite! What pointer “a”  points to, which is num, is being changed.',
  },
];
const questions4 = [
  {
    question: 'The input is passed by?',
    options: ['value', 'reference', 'pointer'],
    answer: 'pointer',
    correctText:
      'Correct! The * in the function parameter signals pass by pointer.',
    wrongText: 'Not quite! There is * in the function parameter.',
  },
  {
    question:
      'When we call the function dream1 with variable num, will num be changed?',
    options: ['No', 'Yes'],
    answer: '*basketballPtr = soccerBall;',
    correctText:
      'Correct! What pointer “a”  points to, which is num, is being changed.',
    wrongText:
      'Not quite! What pointer “a”  points to, which is num, is being changed.',
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
    <RunCode questions={questions1} check={true} displayText={code1} />
  );
  passingCode.push(
    <RunCode questions={questions2} check={true} displayText={code2} />
  );
  passingCode.push(
    <RunCode questions={questions3} check={true} displayText={code3} />
  );
  passingCode.push(
    <RunCode questions={questions4} check={true} displayText={code4} />
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
          </div>
        </div>
      </AppWrapper>
      <NavButtons page={17}></NavButtons>
    </>
  );
};

export default Exercise5;
