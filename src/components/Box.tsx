import '../styles/Box.scss';
import { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

export interface BoxProps {
  letter: string;
  num: number;
  conf: boolean;
}

// The letter is the letter that is put on the box and
// the number is the width of the box in terms of the number of addresses
export default function Box(props: BoxProps): JSX.Element {
  let image;
  let confetti;

  const [randomIndex, setRandomIndex] = useState<number>(0);

  useEffect(() => {
    // Generate a random number to pick randomly from boxes with the same width
    setRandomIndex(Math.floor(Math.random() * 2));
  }, [props.num]);

  switch (props.num) {
    case 1:
      image = (
        <svg
          width="36"
          height="34"
          viewBox="0 0 36 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect
              x="0.667236"
              y="6.68652"
              width="34.8327"
              height="26.513"
              fill="#E6A352"
            />
            <text
              x="50%"
              y="60%"
              fontFamily="Verdana"
              fontSize="14"
              fill="black"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {props.letter}
            </text>
          </g>
          <path
            d="M3.58944 0.954102H32.6946L35.4999 6.68665H0.667236L3.58944 0.954102Z"
            fill="#E6A352"
            fillOpacity="0.9"
          />
          <path
            d="M16.7977 0.954102H19.4862L19.7199 6.68665H16.564L16.7977 0.954102Z"
            fill="#C4C4C4"
            fillOpacity="0.7"
          />
          <rect
            x="16.564"
            y="6.68652"
            width="3.15598"
            height="5.9714"
            fill="#C4C4C4"
          />
        </svg>
      );

      confetti = (
        <div className="confetti a">
          {props.conf && (
            <ConfettiExplosion
              force={0.4}
              duration={5000}
              particleCount={40}
              height={document.documentElement.offsetHeight}
              width={300}
            />
          )}
        </div>
      );
      break;
    case 2:
      switch (randomIndex) {
        case 0:
          image = (
            <svg
              width="76"
              height="135"
              viewBox="0 0 76 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect
                  x="0.0418701"
                  y="23.9729"
                  width="75.5417"
                  height="110.875"
                  fill="#E6A352"
                />
                <text
                  x="50%"
                  y="60%"
                  fontFamily="Verdana"
                  fontSize="20"
                  fill="black"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  {props.letter}
                </text>
              </g>
              <path
                d="M6.37914 0H69.4996L75.5835 23.9731H0.041748L6.37914 0Z"
                fill="#E6A352"
                fillOpacity="0.7"
              />
              <path
                d="M35.0244 0.000244141H40.8549L41.3618 23.9733H34.5175L35.0244 0.000244141Z"
                fill="#C4C4C4"
                fillOpacity="0.7"
              />
              <rect
                x="34.5175"
                y="23.9729"
                width="6.84439"
                height="24.9719"
                fill="#C4C4C4"
              />
            </svg>
          );
          confetti = (
            <div className="confetti b">
              {props.conf && (
                <ConfettiExplosion
                  force={0.4}
                  duration={5000}
                  particleCount={100}
                  height={document.documentElement.offsetHeight}
                  width={300}
                />
              )}
            </div>
          );
          break;
        default:
          image = (
            <svg
              width="71"
              height="101"
              viewBox="0 0 71 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect
                  x="0.663574"
                  y="18.4746"
                  width="69.6654"
                  height="81.8841"
                  fill="#E6A352"
                />
                <text
                  x="50%"
                  y="60%"
                  fontFamily="Verdana"
                  fontSize="20"
                  fill="black"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  {props.letter}
                </text>
              </g>
              <path
                d="M6.50799 0.769531H64.7184L70.329 18.4742H0.663574L6.50799 0.769531Z"
                fill="#E6A352"
                fillOpacity="0.7"
              />
              <path
                d="M32.9248 0.769531H38.3017L38.7692 18.4742H32.4573L32.9248 0.769531Z"
                fill="#C4C4C4"
                fillOpacity="0.7"
              />
              <rect
                x="32.4573"
                y="18.4746"
                width="6.31197"
                height="18.4424"
                fill="#C4C4C4"
              />
            </svg>
          );
          confetti = (
            <div className="confetti b">
              {props.conf && (
                <ConfettiExplosion
                  force={0.4}
                  duration={5000}
                  particleCount={100}
                  height={document.documentElement.offsetHeight}
                  width={300}
                />
              )}
            </div>
          );
          break;
      }
      break;
    case 3:
      switch (randomIndex) {
        case 0:
          image = (
            <svg
              width="105"
              height="94"
              viewBox="0 0 105 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect
                  x="0.165527"
                  y="17.1816"
                  width="104.498"
                  height="76.7925"
                  fill="#E6A352"
                />
                <text
                  x="50%"
                  y="60%"
                  fontFamily="Verdana"
                  fontSize="20"
                  fill="black"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  {props.letter}
                </text>
              </g>
              <path
                d="M8.93215 0.578125H96.2477L104.664 17.1819H0.165527L8.93215 0.578125Z"
                fill="#E6A352"
                fillOpacity="0.9"
              />
              <path
                d="M48.5575 0.578125H56.6228L57.3242 17.1819H47.8562L48.5575 0.578125Z"
                fill="#C4C4C4"
                fillOpacity="0.7"
              />
              <rect
                x="47.8562"
                y="17.1816"
                width="9.46795"
                height="17.2956"
                fill="#C4C4C4"
              />
            </svg>
          );
          confetti = (
            <div className="confetti c">
              {props.conf && (
                <ConfettiExplosion
                  force={0.4}
                  duration={5000}
                  particleCount={100}
                  height={document.documentElement.offsetHeight}
                  width={300}
                />
              )}
            </div>
          );
          break;
        default:
          image = (
            <svg
              width="120"
              height="52"
              viewBox="0 0 120 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect
                  x="0.10376"
                  y="9.98657"
                  width="119.188"
                  height="41.862"
                  fill="#E6A352"
                />
                <text
                  x="50%"
                  y="60%"
                  fontFamily="Verdana"
                  fontSize="20"
                  fill="black"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  {props.letter}
                </text>
              </g>
              <path
                d="M10.1025 0.935303H109.693L119.292 9.98654H0.103516L10.1025 0.935303Z"
                fill="#E6A352"
                fillOpacity="0.7"
              />

              <path
                d="M55.298 0.935059H64.497L65.297 9.9863H54.498L55.298 0.935059Z"
                fill="#C4C4C4"
                fillOpacity="0.7"
              />
              <rect
                x="54.498"
                y="9.98657"
                width="10.7989"
                height="9.42837"
                fill="#C4C4C4"
              />
            </svg>
          );
          confetti = (
            <div className="confetti c">
              {props.conf && (
                <ConfettiExplosion
                  force={0.4}
                  duration={5000}
                  particleCount={100}
                  height={document.documentElement.offsetHeight}
                  width={300}
                />
              )}
            </div>
          );
          break;
      }
      break;
    case 4:
      switch (randomIndex) {
        case 0:
          image = (
            <svg
              width="140"
              height="68"
              viewBox="0 0 140 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect
                  x="0.5"
                  y="12.5576"
                  width="139.331"
                  height="54.5168"
                  fill="#E6A352"
                />
                <text
                  x="50%"
                  y="60%"
                  fontFamily="Verdana"
                  fontSize="20"
                  fill="black"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  {props.letter}
                </text>
              </g>
              <path
                d="M12.1888 0.770508H128.61L139.831 12.5579H0.5L12.1888 0.770508Z"
                fill="#E6A352"
                fillOpacity="0.9"
              />
              <path
                d="M65.0223 0.770508H75.776L76.7111 12.5579H64.0872L65.0223 0.770508Z"
                fill="#C4C4C4"
                fillOpacity="0.7"
              />
              <rect
                x="64.0872"
                y="12.5576"
                width="12.6239"
                height="12.2786"
                fill="#C4C4C4"
              />
            </svg>
          );
          confetti = (
            <div className="confetti d">
              {props.conf && (
                <ConfettiExplosion
                  force={0.4}
                  duration={5000}
                  particleCount={100}
                  height={document.documentElement.offsetHeight}
                  width={300}
                />
              )}
            </div>
          );
          break;
        default:
          image = (
            <svg
              width="160"
              height="40"
              viewBox="0 0 160 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <rect
                  x="0.5"
                  y="6.56152"
                  width="139.331"
                  height="61.5168"
                  fill="#E6A352"
                />
                <text
                  x="44%"
                  y="70%"
                  fontFamily="Verdana"
                  fontSize="13"
                  fill="black"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  {props.letter}
                </text>
              </g>

              <path
                d="M25.3074 -6.5 H113.133 L139.5 6.619 H0.296338 L30.5 -7.2 Z"
                fill="#E6A352"
                fillOpacity="0.9"
              ></path>

              <path
                d="M65.0223 -1H75.776L76.7111 12.5579H64.0872L65.0223 0.770508Z"
                fill="#C4C4C4"
                fillOpacity="0.7"
              />
              <rect
                x="64.0872"
                y="6.56152"
                width="12.6239"
                height="12.2786"
                fill="#C4C4C4"
              />
            </svg>
          );
          confetti = (
            <div className="confetti d">
              {props.conf && (
                <ConfettiExplosion
                  force={0.4}
                  duration={5000}
                  particleCount={100}
                  height={document.documentElement.offsetHeight}
                  width={300}
                />
              )}
            </div>
          );
          break;
      }
      break;
    case 5:
      image = (
        <svg
          width="175"
          height="94"
          viewBox="0 0 175 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect
              x="0.496338"
              y="17.1816"
              width="174.164"
              height="76.7925"
              fill="#E6A352"
            />
            <text
              x="50%"
              y="60%"
              fontFamily="Verdana"
              fontSize="20"
              fill="black"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {props.letter}
            </text>
          </g>
          <path
            d="M15.1074 0.578125H160.633L174.66 17.1819H0.496338L15.1074 0.578125Z"
            fill="#E6A352"
            fillOpacity="0.9"
          />
          <path
            d="M81.1496 0.578125H94.5918L95.7606 17.1819H79.9807L81.1496 0.578125Z"
            fill="#C4C4C4"
            fillOpacity="0.7"
          />
          <rect
            x="79.9807"
            y="17.1816"
            width="15.7799"
            height="17.2956"
            fill="#C4C4C4"
          />
        </svg>
      );
      confetti = (
        <div className="confetti e">
          {props.conf && (
            <ConfettiExplosion
              force={0.4}
              duration={5000}
              particleCount={100}
              height={document.documentElement.offsetHeight}
              width={300}
            />
          )}
        </div>
      );
      break;
    case 6:
      image = (
        <svg
          width="213"
          height="34"
          viewBox="0 0 213 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect
              x="0.574707"
              y="6.56152"
              width="212.092"
              height="26.513"
              fill="#E6A352"
            />
            <text
              x="50%"
              y="65%"
              fontFamily="Verdana"
              fontSize="15"
              fill="black"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {props.letter}
            </text>
          </g>
          <path
            d="M18.3677 0.829102H195.586L212.667 6.56165H0.574707L18.3677 0.829102Z"
            fill="#E6A352"
            fillOpacity="0.9"
          />
          <path
            d="M98.7923 0.829102H115.162L116.585 6.56165H97.3689L98.7923 0.829102Z"
            fill="#C4C4C4"
            fillOpacity="0.7"
          />
          <rect
            x="97.3689"
            y="6.56152"
            width="19.2164"
            height="5.9714"
            fill="#C4C4C4"
          />
        </svg>
      );
      confetti = (
        <div className="confetti f">
          {props.conf && (
            <ConfettiExplosion
              force={0.4}
              duration={5000}
              particleCount={100}
              height={document.documentElement.offsetHeight}
              width={300}
            />
          )}
        </div>
      );

      break;
    default:
      image = (
        <svg
          width="71"
          height="101"
          viewBox="0 0 71 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect
              x="0.663574"
              y="18.4746"
              width="69.6654"
              height="81.8841"
              fill="#E6A352"
            />
            <text
              x="50%"
              y="60%"
              fontFamily="Verdana"
              fontSize="20"
              fill="black"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {props.letter}
            </text>
          </g>
          <path
            d="M6.50799 0.769531H64.7184L70.329 18.4742H0.663574L6.50799 0.769531Z"
            fill="#E6A352"
            fillOpacity="0.7"
          />
          <path
            d="M32.9248 0.769531H38.3017L38.7692 18.4742H32.4573L32.9248 0.769531Z"
            fill="#C4C4C4"
            fillOpacity="0.7"
          />
          <rect
            x="32.4573"
            y="18.4746"
            width="6.31197"
            height="18.4424"
            fill="#C4C4C4"
          />
        </svg>
      );
      break;
  }

  return (
    <div className="parent">
      {confetti}
      <div className="box">{image}</div>
    </div>
  );
}
