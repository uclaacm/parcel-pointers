import '../styles/SlideShow.scss';
import { useState } from 'react';
import FilledDot from '../../public/FilledDot.png';
import LeftArrow from '../../public/LeftArrow.png';
import RegDot from '../../public/RegDot.png';
import RightArrow from '../../public/RightArrow.png';
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
          className="left"
        >
          <img src={LeftArrow} alt="Left Arrow" />
        </button>
      )}
      {props.images[imageNumber]}
      {imageNumber < props.images.length - 1 && 
      <button
        onClick={() => {
          if (imageNumber < props.images.length - 1) {
            setImageNumber(imageNumber + 1);
          }
        }}
        className="right"
      >
        <img src={RightArrow} alt="Right Arrow" />
      </button>}
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
