import { FC } from 'react';
import LeftLadder from '../../public/LeftLadder.png';
import Pipi from '../../public/Pipi.png';
import RightLadder from '../../public/RightLadder.png';
import AlertInbox from '../components/AlertInbox';
import AppWrapper from '../components/AppWrapper';
import Box from '../components/Box';
import ShelfAddress from '../components/ShelfAddress';
import { HeaderSections } from '../types/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';
import '../styles/Demo.scss';

const Demo: FC = () => {
  const nums = Array.from({ length: 72 }, (_, index) => index + 1);
  const nums1 = nums.slice(0, 24);
  const nums2 = nums.slice(24, 48);
  const nums3 = nums.slice(48, 72);
  return (
    <div>
      <AppWrapper section={HeaderSections.DEMO_SECTION}>
        <div id="layout">
          <p className="description">
            {nums1.map((num) => (
              <ShelfAddress key={null} num={num}></ShelfAddress>
            ))}
            <br></br>
            {nums2.map((num) => (
              <ShelfAddress key={null} num={num}></ShelfAddress>
            ))}
            <br></br>
            {nums3.map((num) => (
              <ShelfAddress key={null} num={num}></ShelfAddress>
            ))}
            <br></br>
          </p>
          <h1 className="header">Demo</h1>
          <Box letter="a" num={1} conf={false}></Box>
          <Box letter="b" num={2} conf={true}></Box>
          <Box letter="c" num={3} conf={false}></Box>
          <Box letter="d" num={4} conf={false}></Box>
          <Box letter="e" num={5} conf={false}></Box>
          <Box letter="f" num={6} conf={false}></Box>
          <img className="pipi" src={Pipi} alt="Pipi"></img>
          <img className="ladder" src={LeftLadder} alt="LeftLadder"></img>
          <img className="ladder" src={RightLadder} alt="RightLadder"></img>
          <div id="inbox-wrapper">
            <AlertInbox section_no={1} />
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

export default Demo;
