import { FC } from 'react';
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
            <Box letter="a" num={1}></Box>
            <Box letter="b" num={2}></Box>
            <Box letter="c" num={3}></Box>
            <Box letter="d" num={4}></Box>
            <Box letter="e" num={5}></Box>
            <Box letter="f" num={6}></Box>
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
          <div id="inbox-wrapper">
            <AlertInbox section_no={1} />
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

export default Demo;
