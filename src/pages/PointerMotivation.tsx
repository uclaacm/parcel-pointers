import { FC } from 'react';
import AppWrapper from '../components/AppWrapper';
import { HeaderSections } from '../types/globalTypes';
import '../styles/PointerMotivation.scss';

const PointerMotivation: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.TITLE_SECTION}>
        <div id="lesson">
          <h1 id="title">Why Pointers?</h1>
          <p id="description">
            But first, why do we even need pointers? Even though they&apos;re
            annoying to learn, pointers are actually really useful. Click
            through to see the many different ways they can be helpful:
          </p>
          {/* insert slide show and prev/next buttons */}
          <p id="description">
            Now that we know pointers are actually gonna be useful in the
            future, let&apos;s see what they are and how they work! Our little
            friend PiPi is going to be your guide through this learning lab
          </p>
        </div>
      </AppWrapper>
    </div>
  );
};

export default PointerMotivation;
