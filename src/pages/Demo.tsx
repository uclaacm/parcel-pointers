import { FC } from 'react';
import LeftLadder from '../../public/LeftLadder.png';
import Pipi from '../../public/Pipi.png';
import RightLadder from '../../public/RightLadder.png';
import AlertInbox from '../components/AlertInbox';
import AppWrapper from '../components/AppWrapper';
import Box from '../components/Box';
import { HeaderSections } from '../types/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';
import '../styles/Demo.scss';

const Demo: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.LEARNING_SECTION}>
        <div id="layout">
          <h1 className="header">Demo</h1>
          <Box letter="a" num={1}></Box>
          <Box letter="b" num={2}></Box>
          <Box letter="c" num={3}></Box>
          <Box letter="d" num={4}></Box>
          <Box letter="e" num={5}></Box>
          <Box letter="f" num={6}></Box>
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
