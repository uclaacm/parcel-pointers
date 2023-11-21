import { FC, useState } from 'react';
import LeftLadder from '../../public/LeftLadder.png';
import Pipi from '../../public/Pipi.svg';
import RightLadder from '../../public/RightLadder.png';
import AppWrapper from '../components/AppWrapper';
import Box from '../components/Box';
import Grid from '../components/Grid';
import HintBox from '../components/HintBox';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';
import '../styles/Demo.scss';

const Demo: FC = () => {
  const [confetti, setConfetti] = useState(false);
  const nums = Array.from({ length: 72 }, (_, index) => index + 1);
  const nums1 = nums.slice(0, 24);
  const nums2 = nums.slice(24, 48);
  const nums3 = nums.slice(48, 72);
  const itemSpaceArray1 = [6, 3, 2, 2, 2, 3, 4, 1, 3];
  const itemSpaceArray2 = [5, 1, 6, 2, 3, 4, 3];
  const itemSpaceArray3 = [2, 5, 2, 4, 1, 3, 1, 4];
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

          <HintBox text="Click on the first address occupied by the box (the leftmost one)." />

          {/* THE DEMO BOX */}
          <div className="wrap">
            <img className="ladder" src={LeftLadder} alt="LeftLadder" />
            <div className="demobox">
              <Grid
                addressNums={nums1}
                itemSpaceArray={itemSpaceArray1}
                size={40}
                handleCorrect={setConfetti}
              >
                <img className="pipi" src={Pipi} alt="Pipi"></img>
                <Box letter="a" num={3} conf={false}></Box>
                <div></div>
                <Box letter="b" num={2} conf={false}></Box>
                <div></div>
                <Box letter="c" num={3} conf={false}></Box>
                <Box letter="d" num={4} conf={false}></Box>
                <div></div>
                <Box letter="e" num={2} conf={false}></Box>
              </Grid>
              <Grid
                addressNums={nums2}
                itemSpaceArray={itemSpaceArray2}
                size={40}
                handleCorrect={setConfetti}
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
                handleCorrect={setConfetti}
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
