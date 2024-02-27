import { FC } from 'react';
import lesson7array from '../../public/lesson7array.svg';
import Slide1lesson7 from '../../public/Slide1lesson7.svg';
import Slide2lesson7 from '../../public/Slide2lesson7.svg';
import Slide3lesson7 from '../../public/Slide3lesson7.svg';
import Slide4lesson7 from '../../public/Slide4lesson7.svg';
import Slide5lesson7 from '../../public/Slide5lesson7.svg';
import Slide6lesson7 from '../../public/Slide6lesson7.svg';
import AppWrapper from '../components/AppWrapper';
import NavButtons from '../components/NavButtons';
import SlideShow from '../components/SlideShow';
import { HeaderSections } from '../types/globalTypes';
import '../styles/PageWrapper.scss';
import '../styles/Lesson7.scss';

const Lesson7: FC = () => {
  const imageArray = [];

  imageArray.push(<img src={Slide1lesson7} className="lesson7slides" />);
  imageArray.push(<img src={Slide2lesson7} className="lesson7slides" />);
  imageArray.push(<img src={Slide3lesson7} className="lesson7slides" />);
  imageArray.push(<img src={Slide4lesson7} className="lesson7slides" />);
  imageArray.push(<img src={Slide5lesson7} className="lesson7slides" />);
  imageArray.push(<img src={Slide6lesson7} className="lesson7slides" />);

  return (
    <div>
      <AppWrapper section={HeaderSections.LESSON_7}>
        <div className="page-wrapper">
          <h1>Arrays and Pointer Arithmetic</h1>
          <p>
            <b>Array:</b> a line of boxes that are the same size
          </p>
          <div className="diagram">
            <img src={lesson7array} className="array"></img>
          </div>
          <p>
            Let&apos;s talk about arrays, since they are helpful for
            understanding pointer arithmetic! Arrays are typically used to
            represent multiple values of the same type in one data structure. In
            memory, arrays are represented by just having values set
            contiguously in memory. This means that we can simply add to our
            pointer to move the pointer to.
          </p>
          <SlideShow images={imageArray} />
          <NavButtons page={10} />
        </div>
      </AppWrapper>
    </div>
  );
};

export default Lesson7;
