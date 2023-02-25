import { FC } from 'react';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';

const PointerMotivation: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.TITLE_SECTION}>
        <div className="page-wrapper">
          <h1>Why Pointers?</h1>
          <p>
            But first, why do we even need pointers? Even though they&apos;re
            annoying to learn, pointers are actually really useful. Click
            through to see the many different ways they can be helpful:
          </p>
          <div className="diagram">
            {/* TODO: insert slide show */}
          </div>
          <p>
            Now that we know pointers are actually gonna be useful in the
            future, let&apos;s see what they are and how they work! Our little
            friend PiPi is going to be your guide through this learning lab
          </p>
          <NavButtons page={1} />
        </div>
      </AppWrapper>
    </div>
  );
};

export default PointerMotivation;
