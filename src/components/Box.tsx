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
  const basketball = (
    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      x="100"
      y="20"
    >
      <path
        d="M0.0490153 34.2686C1.0257 52.1909 16.3463 65.9277 34.2684 64.951C52.1906 63.9748 65.9277
      48.6539 64.951 30.7317C63.9742 12.8094 48.6537 -0.927677 30.7315 0.0490162C12.8094 1.0257 -0.927667
      16.3463 0.0490153 34.2686Z"
        fill="#E57E25"
      />
      <path
        d="M0.988034 36.4034C4.98549 32.2078 11.8489 30.5755 16.9593 32.6012C12.82 39.1531 9.98913
      46.4241 8.61866 54.0233C9.20337 54.6469 9.81675 55.2414 10.4491 55.8164C10.6126 55.6541 10.7217
      55.4461 10.7617 55.2206C12.0328 47.5837 14.8348 40.273 19.0042 33.7153C22.1058 35.8317 23.7736
      39.4998 23.7089 44.3246L23.7076 44.3868L23.7134 44.4499C24.3909 51.3934 28.8135 57.5429 35.5429
      60.898C37.5874 61.9241 39.7802 62.633 42.0441 63C43.9299 62.4403 45.76 61.7126 47.5118
      60.8254C43.9758 61.2867 40.1688 60.6282 36.5951 58.8468C30.6023 55.8587 26.6615 50.4207 26.0408
      44.2905C26.1157 37.3053 23.1069 33.6563 20.2971 31.7681C21.9047 29.4451 23.679 27.2386 25.6063
      25.1652C34.3657 32.3508 42.629 40.1042 50.3412 48.3739L55.6975 54.1269L57.4163 52.5714L52.0598
      46.8184C44.313 38.5112 36.015 30.7201 27.2206 23.4967C28.7612 21.9632 30.3863 20.5143 32.0886
      19.1567C35.064 22.4749 39.6337 23.9334 45.2073 23.2704C50.4833 23.2233 55.5788 25.7818 59.1959
      30.2951C62.0091 33.805 63.578 38.0748 63.6697 42.1314C64.2989 40.2217 64.7446 38.2579 65
      36.2658C64.1404 33.5842 62.7944 31.0786 61.0271 28.8706C56.9433 23.7745 51.1431 20.8958 45.1153
      20.9729L45.0511 20.9741L44.9884 20.9821C40.2658 21.5509 36.4357 20.3923 33.9511 17.7294C39.8072
      13.4166 46.4243 10.2118 53.4667 8.27783C53.6882 8.21106 53.8838 8.07923 54.0274 7.90007C53.3814
      7.34332 52.7134 6.81196 52.0248 6.30718C45.0138 8.33214 38.4254 11.5734 32.5695 15.8787C30.0549
      11.5146 30.4992 5.16813 33.6746 0.658708L34.1153 0.0329947C33.0211 -0.0155457 31.9252 -0.0105264
      30.8315 0.0480409L30.8705 0.752816C27.9187 5.96629 27.8008 12.5554 30.7048 17.3061C28.851 18.7798
      27.0845 20.3571 25.4141 22.0303C21.4237 18.8006 17.3356 15.69 13.1553 12.7027L9.12408 9.82905C8.58064
      10.3841 8.05757 10.9583 7.55592 11.5503L11.7889 14.5673C15.8859 17.4945 19.8933 20.5415 23.806
      23.7042C21.787 25.8838 19.9303 28.2042 18.2505 30.6474C18.1139 30.5879 17.975 30.5263 17.8447
      30.4746C12.1802 28.2217 4.97418 29.6802 0.221376 33.9256L0 33.9375C0.059063 35.005 0.173265
      36.0557 0.333292 37.0901L0.988034 36.4034Z"
        fill="#38454F"
      />
    </svg>
  );

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
            <div>
              <ConfettiExplosion
                force={0.4}
                duration={5000}
                particleCount={40}
                height={document.documentElement.offsetHeight}
                width={300}
              />
            </div>
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
      if (props.conf) {
        const shiftAmountX = -15;
        const shiftAmountY = 1;

        image = (
          <svg
            width="170"
            height="64"
            viewBox="0 0 170 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform={`translate(${shiftAmountX}, ${shiftAmountY})`}
          >
            <g>
              <rect
                x="15.5602"
                y="18.0812"
                width="137.4868"
                height="44"
                fill="#E6A352"
              />

              <text
                x="50%"
                y="75%"
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
              d="M139.809 0.948647L156.995 9.48647L170 23.7162L156.066 19.9216L139.809 0.948647Z"
              fill="#EBC99C"
            />
            <path
              d="M32.0492 0L19.5082 6.12826L0 26.5621L17.6503 17.3697L32.0492 0Z"
              fill="#EBC99C"
            />
            <path
              d="M140.487 0.550215H30.8694V18.5745H140.487V0.550215Z"
              fill="#BC8239"
            />
            <path
              d="M15.5602 19.0299L30.8694 0.550215V19.0299H15.5602Z"
              fill="#936122"
            />
            <path
              d="M155.248 18.0812H15.7366L3.42783 33.0812H167.557L155.248 18.0812Z"
              fill="#ECC290"
            />
            <path
              d="M155.295 18.0812L139.985 0.550215V18.0812H155.295Z"
              fill="#AE752E"
            />
          </svg>
        );

        confetti = (
          <div className="confetti d">
            {props.conf && (
              <div>
                <ConfettiExplosion
                  force={0.4}
                  duration={5000}
                  particleCount={40}
                  height={document.documentElement.offsetHeight}
                  width={300}
                />
              </div>
            )}
          </div>
        );
        break;
      }
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
            <div>
              <ConfettiExplosion
                force={0.4}
                duration={5000}
                particleCount={40}
                height={document.documentElement.offsetHeight}
                width={300}
              />
            </div>
          )}
        </div>
      );
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
      {props.conf && (
        <div className={`ball ${props.conf ? 'animate-ball' : ''}`}>
          {basketball}
        </div>
      )}
    </div>
  );
}
