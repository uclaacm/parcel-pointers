import { FC } from 'react';
import AlertInbox from '../components/AlertInbox';
import AppWrapper from '../components/AppWrapper';
import { HeaderSections } from '../types/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';
import '../styles/Demo.scss';

const Demo: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.LEARNING_SECTION}>
        <div id="layout">
          <h1 className="header">Demo</h1>
          <p className="description">
            The main animation slide, where we have the shelves of boxes and the
            robot.
          </p>

          <div id="inbox-wrapper">
            <AlertInbox section_no={1}/>
          </div>
        </div>
    </AppWrapper>
    </div>
  );
};

export default Demo;
