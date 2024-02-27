import '../styles/SlideShow.scss';
import { useState } from 'react';
import FilledDot from '../../public/FilledDot.svg';
import LeftArrow from '../../public/LeftArrow.svg';
import RegDot from '../../public/RegDot.svg';
import RightArrow from '../../public/RightArrow.svg';
export interface SlideShowProps {
  images: JSX.Element[];
}

export default function SlideShow(props: SlideShowProps): JSX.Element {
  const [imageNumber, setImageNumber] = useState(0);
  return (
    <div className="slideshow">
      {imageNumber !== 0 && (
        <button
          onClick={() => {
            if (imageNumber > 0) {
              setImageNumber(imageNumber - 1);
            }
          }}
          className="slideshow-left"
        >
          <img src={LeftArrow} alt="Left Arrow" />
        </button>
      )}
      {props.images[imageNumber]}
      {imageNumber < props.images.length - 1 && (
        <button
          onClick={() => {
            if (imageNumber < props.images.length - 1) {
              setImageNumber(imageNumber + 1);
            }
          }}
          className="slideshow-right"
        >
          <img src={RightArrow} alt="Right Arrow" />
        </button>
      )}
      <div className="indicator">
        {props.images.map((_item, index) => {
          if (index == imageNumber) {
            return <img key={index} src={FilledDot} alt="dot" />;
          } else {
            return <img key={index} src={RegDot} alt="dot" />;
          }
        })}
      </div>
    </div>
  );
}
