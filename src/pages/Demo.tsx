import { FC } from 'react';
import AlertInbox from '../components/AlertInbox';
import AppWrapper from '../components/AppWrapper';
import ShelfAddress from '../components/ShelfAddress';
import { HeaderSections } from '../types/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';
import '../styles/Demo.scss';

const Demo: FC = () => {
  const nums = Array.from({length: 24}, (_, index) => index + 1);
  return (
    <div>
      <AppWrapper section={HeaderSections.LEARNING_SECTION}>
        <div id="layout">
          <h1 className="header">Demo</h1>
          <p className="description">
            {nums.map(num =>
              <ShelfAddress num = {num}></ShelfAddress>
            )}
            The main animation slide, where we have the shelves of boxes and the
            robot.
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
