import { FC, useState, useEffect, useRef } from 'react';
import '../styles/Exercise3.scss';
import Pipi from '../../public/Pipi.svg';
import PipiPointRight from '../../public/PipiPointRight.svg';
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
    answerText: new Map([
      [
        '*basketballPtr = soccerBall;',
        'Correct! This correctly dereferences the pointer and sets the basketball to a soccer ball.',
      ],
      [
        'basketballPtr = soccerBall;',
        'Not quite, this is invalid and makes the pointer equal the soccer ball, instead of the basketball. We need to dereference the pointer.',
      ],
      [
        'basketballPtr = &soccerBall;',
        'Not quite, although this is valid, this makes the pointer just point at the soccer ball instead of replacing the basketball with the soccer ball',
      ],
      [
        '&basketballPtr = soccerBall;',
        'Not quite, this is invalid and makes the address of the pointer the soccer ball instead',
      ],
    ]),
  },
];

const Exercise3: FC = () => {
  const [enableTransition, setEnableTransition] = useState(false);
  const [animatedPipi, setAnimatedPipi] = useState(Pipi);
  const [confetti, setConfetti] = useState(false);
  const [leftOffset, setLeftOffset] = useState(0);
  const [topOffset, setTopOffset] = useState(0);

  const [clickedCorrectAddress, setClickedCorrectAddress] = useState(false);
  const [clickedIncorrectAddress, setClickedIncorrectAddress] = useState(false);
  const [selectionMade, setSelectionMade] = useState(false);

  const timeForTransition = useRef(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const nums = Array.from({ length: 24 }, (_, index) => index + 1);
  const itemSpace = [1, 3, 1, 3, 2, 4, 2, 1, 1, 2, 1, 2, 1];

  // for calculating new offset
  const addressWidth = 40; // Replace with actual width if different

  function fixPipiPosition() {
    if (wrapRef.current) {
      const rect = wrapRef.current.getBoundingClientRect();
      setLeftOffset(rect.left + window.scrollX);
      setTopOffset(rect.top + window.scrollY + 15);
      if (clickedCorrectAddress) {
        const newLeftOffset =
          addressWidth * (9 - 1) + rect.left + window.scrollX;
        setLeftOffset(newLeftOffset);
      }
    }
  }

  useEffect(() => {
    fixPipiPosition();
    window.addEventListener('resize', fixPipiPosition);
  }, [clickedCorrectAddress]);

  useEffect(() => {
    if (enableTransition) {
      setTimeout(() => {
        setAnimatedPipi(PipiPointRight);
        setConfetti(true);
        setEnableTransition(false);
      }, 1500);
    }
  }, [enableTransition]);

  const handleCorrectAddressClick = () => {
    setClickedCorrectAddress(true);
    setClickedIncorrectAddress(false);
    setConfetti(true);
    setSelectionMade(true);
    setEnableTransition(true);
    fixPipiPosition();
    timeForTransition.current = true;
  };

  const handleIncorrectAddressClick = () => {
    setClickedIncorrectAddress(true);
    setClickedCorrectAddress(false);
    setSelectionMade(true);
  };

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
          <>
            {clickedCorrectAddress && (
              <HintBox
                text="You clicked the correct address! Pipi found the basketball."
                correct
                noClose={true}
              />
            )}
            {clickedIncorrectAddress && (
              <HintBox
                text="Click on the first address occupied by the box (the leftmost one)."
                correct={false}
                noClose={true}
              />
            )}
            {!selectionMade && <HintBox text="" />}
          </>
          <div className="exercise3-wrap" ref={wrapRef}>
            <div className="exercise3-box">
              <Grid
                addressNums={nums}
                itemSpaceArray={itemSpace}
                size={40}
                correctAddress={11}
                disabled={clickedCorrectAddress}
                handleCorrect={() => handleCorrectAddressClick()}
                handleIncorrect={() => handleIncorrectAddressClick()}
                style={{ margin: '0px' }}
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
            <img
              className="exercise3-pipi"
              src={animatedPipi}
              alt="Pipi"
              style={{
                left: leftOffset,
                top: topOffset,
                transition: enableTransition ? 'left 1.3s' : 'none',
              }}
            />
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
