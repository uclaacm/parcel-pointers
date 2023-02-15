import { FC } from 'react';
import AlertInbox from '../components/AlertInbox';
import AppWrapper from '../components/AppWrapper';
import Box from '../components/Box';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';
import '../styles/Demo.scss';

const Demo: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.LEARNING_SECTION}>
        <div id="layout">
          <h1 className="header">Demo</h1>
          <Box letter="a" num={1} conf={false}></Box>
          <Box letter="b" num={2} conf={true}></Box>
          <Box letter="c" num={3} conf={false}></Box>
          <Box letter="d" num={4} conf={false}></Box>
          <Box letter="e" num={5} conf={false}></Box>
          <Box letter="f" num={6} conf={false}></Box>
          <div id="inbox-wrapper">
            <AlertInbox section_no={1} />
          </div>
        </div>
      </AppWrapper>
      <NavButtons page={2}></NavButtons>
    </div>
  );
};

export default Demo;
