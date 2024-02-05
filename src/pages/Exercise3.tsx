import { FC, useState } from 'react';
import '../styles/Exercise3.scss';
import Pipi from '../../public/Pipi.svg';
import AppWrapper from '../components/AppWrapper';
import Box from '../components/Box';
import Grid from '../components/Grid';
import HintBox from '../components/HintBox';
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

const Exercise3: FC = () => {
  const [confetti, setConfetti] = useState(false);
  const nums = Array.from({ length: 24 }, (_, index) => index + 1);
  const itemSpace = [1, 3, 1, 3, 2, 4, 2, 1, 1, 2, 1, 2, 1];
  return (
    <>
      <AppWrapper section={HeaderSections.EXERCISE_3}>
        <div className="page-wrapper">
          <h1>Dereferencing Pointers</h1>
          <p>
            For this exercise, you will be helping Pipi find the basketball that
            was stored in the last lesson and replacing it with a soccer ball.
          </p>
          <h2>Instructions</h2>
          <p>
            Take PiPi to <span className="highlight">Box j</span> by clicking on
            the correct address.
          </p>
          <HintBox text="Click on the first address occupied by the box (the leftmost one)." />
          <div className="wrap">
            <div className="Exercise-box">
              <Grid
                addressNums={nums}
                itemSpaceArray={itemSpace}
                size={40}
                handleCorrect={setConfetti}
              >
                <div></div>
                <Box letter="h" num={3} conf={false}></Box>
                <div></div>
                <Box letter="i" num={3} conf={false}></Box>
                <div></div>
                <Box letter="j" num={4} conf={confetti}></Box>
                <div></div>
                <Box letter="k" num={1} conf={false}></Box>
                <div></div>
                <Box letter="l" num={2} conf={false}></Box>
                <div></div>
                <Box letter="m" num={3} conf={false}></Box>
              </Grid>
            </div>
            <img className="exercise-3-pipi" src={Pipi} alt="Pipi" />
          </div>
          <h3>
            Pipi now wants to replace the basketball with a soccer ball. What is
            the corresponding code to do this?
          </h3>
          <div className="exercise3-div">
            <RunCode
              questions={question}
              displayText={
                'SoccerBall soccerBall; // ignore the type difference here'
              }
            />
          </div>
        </div>
      </AppWrapper>
      <NavButtons page={16}></NavButtons>
    </>
  );
};

export default Exercise3;
