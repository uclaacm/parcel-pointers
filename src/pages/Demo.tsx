import { FC } from 'react';
import AlertInbox from '../components/AlertInbox';
import AppWrapper from '../components/AppWrapper';
import ShelfAddress from '../components/ShelfAddress';
import Box from '../components/Box';
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
      <AppWrapper section={HeaderSections.LEARNING_SECTION}>
        <div id="layout">
          <h1 className="header">Demo</h1>
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
            The main animation slide, where we have the shelves of boxes and the
            robot.
          </p>

          <Box letter="a" num={1}></Box>
          <Box letter="b" num={2}></Box>
          <Box letter="c" num={3}></Box>
          <Box letter="d" num={4}></Box>
          <Box letter="e" num={5}></Box>
          <Box letter="f" num={6}></Box>
          <div id="inbox-wrapper">
            <AlertInbox section_no={1} />
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

export default Demo;
