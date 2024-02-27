import { FC, useEffect, useState, useRef } from 'react';
import LeftLadder from '../../public/LeftLadder.svg';
import Pipi from '../../public/Pipi.svg';
import PipiPointRight from '../../public/PipiPointRight.svg';
import RightLadder from '../../public/RightLadder.svg';
import AppWrapper from '../components/AppWrapper';
import Box from '../components/Box';
import Grid from '../components/Grid';
import HintBox from '../components/HintBox';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';
import '../styles/Demo.scss';

const Demo: FC = () => {
  const [animation, setAnimation] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [leftOffset, setLeftOffset] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const [animatedPipi, setAnimatedPipi] = useState(Pipi);

  const [clickedCorrectAddress, setClickedCorrectAddress] = useState(false);
  const [clickedIncorrectAddress, setClickedIncorrectAddress] = useState(false);
  const [selectionMade, setSelectionMade] = useState(false);
  const pipiRef = useRef<HTMLImageElement>(null);

  const nums = Array.from({ length: 72 }, (_, index) => index + 1);
  const nums1 = nums.slice(0, 24);
  const nums2 = nums.slice(24, 48);
  const nums3 = nums.slice(48, 72);
  const itemSpaceArray1 = [2, 3, 3, 2, 2, 2, 3, 4, 2, 3];
  const itemSpaceArray2 = [5, 1, 6, 2, 3, 4, 3];
  const itemSpaceArray3 = [2, 5, 2, 4, 1, 3, 1, 4];

  const fixPipiPosition = () => {
    if (pipiRef.current) {
      const rect = pipiRef.current.getBoundingClientRect();
      setLeftOffset(rect.left + window.scrollX);
      setTopOffset(rect.top + window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', fixPipiPosition);
  }, []);
  useEffect(() => {
    if (animation) {
      fixPipiPosition();
      setTimeout(() => {
        setAnimatedPipi(PipiPointRight);
        setConfetti(true);
      }, 5000);
    }
  }, [animation]);

  const handleCorrectAddressClick = () => {
    setClickedCorrectAddress(true);
    setClickedIncorrectAddress(false);
    setAnimation(true);
    setSelectionMade(true);
  };

  const handleIncorrectAddressClick = () => {
    setClickedIncorrectAddress(true);
    setSelectionMade(true);
  };

  return (
    <div>
      <AppWrapper section={HeaderSections.DEMO_SECTION}>
        <div className="page-wrapper">
          {/* This is the heading and hint section */}
          <h1>Demo</h1>
          <p>
            Pipi wants to find a basketball. but does not know where to look!
            The warehouse is full of various boxes full of all kinds of items at
            different shelf address numbers. Pipi got a note saying that the
            basketball in Box I but can only see the shelf addresses. Can you
            help them find the basketball?
          </p>

          <h3>Instructions</h3>
          <p>
            Take Pipi to <span className="highlight">Box i</span> by clicking on
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

          {/* THE DEMO BOX */}
          <img
            className="pipi-animated"
            src={animatedPipi}
            alt="Pipi"
            style={{
              display: animation ? 'flex' : 'none',
              left: leftOffset,
              top: topOffset,
            }}
          ></img>
          <div className="demo-wrap">
            <img className="ladder" src={LeftLadder} alt="LeftLadder" />
            <div className="demobox">
              <Grid
                addressNums={nums1}
                itemSpaceArray={itemSpaceArray1}
                size={40}
                disabled={clickedCorrectAddress}
                handleCorrect={() => handleCorrectAddressClick()}
                handleIncorrect={() => handleIncorrectAddressClick()}
              >
                <div />
                <img
                  className="demo-pipi"
                  src={Pipi}
                  ref={pipiRef}
                  alt="Pipi"
                  style={{ visibility: animation ? 'hidden' : 'visible' }}
                ></img>
                <Box letter="a" num={3} conf={false}></Box>
                <div />
                <Box letter="b" num={2} conf={false}></Box>
                <div />
                <Box letter="c" num={3} conf={false}></Box>
                <Box letter="d" num={4} conf={false}></Box>
                <div />
                <Box letter="e" num={2} conf={false}></Box>
              </Grid>
              <Grid
                addressNums={nums2}
                itemSpaceArray={itemSpaceArray2}
                size={40}
                correctAddress={42}
                disabled={clickedCorrectAddress}
                handleCorrect={() => handleCorrectAddressClick()}
                handleIncorrect={() => handleIncorrectAddressClick()}
              >
                <Box letter="f" num={5} conf={false}></Box>
                <div></div>
                <Box letter="g" num={6} conf={false}></Box>
                <Box letter="h" num={2} conf={false}></Box>
                <div></div>
                <Box letter="i" num={4} conf={confetti}></Box>
                <Box letter="j" num={1} conf={false}></Box>
              </Grid>
              <Grid
                addressNums={nums3}
                itemSpaceArray={itemSpaceArray3}
                size={40}
                disabled={clickedCorrectAddress}
                handleCorrect={() => handleCorrectAddressClick()}
                handleIncorrect={() => handleIncorrectAddressClick()}
                style={{ margin: '0px' }}
              >
                <div></div>
                <Box letter="k" num={5} conf={false}></Box>
                <div></div>
                <Box letter="l" num={4} conf={false}></Box>
                <Box letter="m" num={1} conf={false}></Box>
                <Box letter="n" num={3} conf={false}></Box>
                <div></div>
                <Box letter="o" num={4} conf={false}></Box>
              </Grid>
            </div>
            <p className="description">
              <br></br>
            </p>
            <img className="ladder" src={RightLadder} alt="RightLadder" />
          </div>
        </div>
      </AppWrapper>
      <NavButtons page={2}></NavButtons>
    </div>
  );
};

export default Demo;
