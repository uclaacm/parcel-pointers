import { useRef, useEffect, useMemo, useState } from 'react';
import '../styles/FillArrow.scss';

interface FillArrowProps {
  text1: string;
  text2: string;
}

// @ts-expect-error typing ref doesn't really work correctly
function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

function FillArrow(props: FillArrowProps): JSX.Element {
  const ref = useRef(null);

  const isInViewport = useIsInViewport(ref);

  const [animate, setAnimate] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (isInViewport) {
      setSeen(true);
    }
    if (seen && !animate) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 5000);
    }
  }, [isInViewport, seen, animate]);

  return (
    <div ref={ref} className="overall-container">
      <span className="fill-arrow-container">
        <div className="fill-arrow">
          <div
            className="fill-arrow-background"
            style={{ clipPath: 'url(#arrow)' }}
          >
            <svg
              width="415"
              height="121"
              viewBox="0 0 415 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={animate ? 'arrow-animation' : ''}
            >
              <clipPath id="arrow">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 2C4.23858 2 2 4.23858 2 7V114C2 116.761 4.23857 119 7 119H247C249.761 119 252 116.761 252 114V75.5H344.885V98L410 60.5L344.885 23V44.5H252V7C252 4.23858 249.761 2 247 2H7Z"
                  className="arrow-animation"
                />
              </clipPath>
              <path
                d="M252 75.5V73.5H250V75.5H252ZM344.885 75.5H346.885V73.5H344.885V75.5ZM344.885 98H342.885V101.46L345.883 99.7331L344.885 98ZM410 60.5L410.998 62.2331L414.008 60.5L410.998 58.7669L410 60.5ZM344.885 23L345.883 21.2669L342.885 19.5402V23H344.885ZM344.885 44.5V46.5H346.885V44.5H344.885ZM252 44.5H250V46.5H252V44.5ZM4 7C4 5.34315 5.34315 4 7 4V0C3.13401 0 0 3.13401 0 7H4ZM4 114V7H0V114H4ZM7 117C5.34314 117 4 115.657 4 114H0C0 117.866 3.134 121 7 121V117ZM247 117H7V121H247V117ZM250 114C250 115.657 248.657 117 247 117V121C250.866 121 254 117.866 254 114H250ZM250 75.5V114H254V75.5H250ZM252 77.5H344.885V73.5H252V77.5ZM342.885 75.5V98H346.885V75.5H342.885ZM345.883 99.7331L410.998 62.2331L409.002 58.7669L343.887 96.2669L345.883 99.7331ZM410.998 58.7669L345.883 21.2669L343.887 24.7331L409.002 62.2331L410.998 58.7669ZM342.885 23V44.5H346.885V23H342.885ZM344.885 42.5H252V46.5H344.885V42.5ZM250 7V44.5H254V7H250ZM247 4C248.657 4 250 5.34314 250 7H254C254 3.13401 250.866 0 247 0V4ZM7 4H247V0H7V4Z"
                fill="#797E87"
              />
            </svg>
          </div>
          <div className="fill-arrow-border">
            <svg
              width="415"
              height="121"
              viewBox="0 0 415 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M252 75.5V73.5H250V75.5H252ZM344.885 75.5H346.885V73.5H344.885V75.5ZM344.885 98H342.885V101.46L345.883 99.7331L344.885 98ZM410 60.5L410.998 62.2331L414.008 60.5L410.998 58.7669L410 60.5ZM344.885 23L345.883 21.2669L342.885 19.5402V23H344.885ZM344.885 44.5V46.5H346.885V44.5H344.885ZM252 44.5H250V46.5H252V44.5ZM4 7C4 5.34315 5.34315 4 7 4V0C3.13401 0 0 3.13401 0 7H4ZM4 114V7H0V114H4ZM7 117C5.34314 117 4 115.657 4 114H0C0 117.866 3.134 121 7 121V117ZM247 117H7V121H247V117ZM250 114C250 115.657 248.657 117 247 117V121C250.866 121 254 117.866 254 114H250ZM250 75.5V114H254V75.5H250ZM252 77.5H344.885V73.5H252V77.5ZM342.885 75.5V98H346.885V75.5H342.885ZM345.883 99.7331L410.998 62.2331L409.002 58.7669L343.887 96.2669L345.883 99.7331ZM410.998 58.7669L345.883 21.2669L343.887 24.7331L409.002 62.2331L410.998 58.7669ZM342.885 23V44.5H346.885V23H342.885ZM344.885 42.5H252V46.5H344.885V42.5ZM250 7V44.5H254V7H250ZM247 4C248.657 4 250 5.34314 250 7H254C254 3.13401 250.866 0 247 0V4ZM7 4H247V0H7V4Z"
                fill="#121538"
              />
            </svg>
          </div>
          <p id="box-text">{props.text1}</p>
        </div>
        <div className="fill-arrow">
          <div
            className="fill-arrow-background"
            style={{ clipPath: 'url(#box)' }}
          >
            <svg
              width="250"
              height="117"
              viewBox="0 0 250 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={animate ? 'box-animation' : ''}
            >
              <clipPath id="box">
                <rect
                  x="2"
                  y="2"
                  width="246"
                  height="113"
                  rx="3"
                  fill="#FEC900"
                  stroke="#797E87"
                  strokeWidth="4"
                />
              </clipPath>
              <rect
                x="2"
                y="2"
                width="246"
                height="113"
                rx="3"
                stroke="#797E87"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div className="fill-arrow-border">
            <svg
              width="250"
              height="117"
              viewBox="0 0 250 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="246"
                height="113"
                rx="3"
                stroke="#121538"
                strokeWidth="4"
              />
            </svg>
          </div>

          <p id="arrow-text">{props.text2}</p>
        </div>
      </span>
    </div>
  );
}

export default FillArrow;
