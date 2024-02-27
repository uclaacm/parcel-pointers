import { FC } from 'react';
import WhyPointer1 from '../../public/WhyPointer1.svg';
import WhyPointer2 from '../../public/WhyPointer2.svg';
import WhyPointer3 from '../../public/WhyPointer3.svg';
import WhyPointer4 from '../../public/WhyPointer4.svg';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import SlideShow from '../components/SlideShow';
import { HeaderSections } from '../types/globalTypes';

const PointerMotivation: FC = () => {
  const imageArray = [];
  imageArray.push(<img src={WhyPointer1} />);
  imageArray.push(<img src={WhyPointer2} />);
  imageArray.push(<img src={WhyPointer3} />);
  imageArray.push(<img src={WhyPointer4} />);
  return (
    <div>
      <AppWrapper section={HeaderSections.POINTER_MOTIVATION}>
        <div className="page-wrapper">
          <h1>Why Pointers?</h1>
          <p>
            But first, why do we even need pointers? Even though they&apos;re
            annoying to learn, pointers are actually really useful. Click
            through to see the many different ways they can be helpful:
          </p>
          <SlideShow images={imageArray} />
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
