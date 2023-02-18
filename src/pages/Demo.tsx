import { FC } from 'react';
import Arrow from '../../public/Arrow.png';
import LeftLadder from '../../public/LeftLadder.png';
import Pipi from '../../public/Pipi.png';
import RightLadder from '../../public/RightLadder.png';
import AlertInbox from '../components/AlertInbox';
import AppWrapper from '../components/AppWrapper';
import Box from '../components/Box';
import ShelfAddress from '../components/ShelfAddress';
import NavButtons from '../components/NavButtons';
import { HeaderSections } from '../types/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';
import '../styles/Demo.scss';

const Demo: FC = () => {
  const Popup = (
    <div>
      <div className="address-wrapper">
        <svg
          width="234"
          height="83"
          viewBox="0 0 234 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect width="234" height="83" rx="5" fill="#FEC900" />
            <text
              x="50%"
              y="55%"
              fontFamily="Verdana"
              fontSize="25"
              fill="black"
              dominantBaseline="middle"
              textAnchor="middle"
              fontWeight="600"
            >
              Address 12
            </text>
          </g>
        </svg>
      </div>
      <div className="pipi-to-box-wrapper">
        <svg
          width="97"
          height="155"
          viewBox="0 0 97 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.5698 138.215L45.1556 123.375H51.4089L51.9947 138.215H44.5698Z"
            fill="#C4C4C4"
            stroke="#444B5B"
            strokeWidth="0.75"
          />
          <circle
            cx="48.2821"
            cy="143.718"
            r="9.78205"
            fill="#303140"
            stroke="#7BD5E0"
            strokeWidth="3"
          />
          <path
            d="M45 126.416C46.1624 126.005 49.1026 125.431 51.5641 126.416"
            stroke="#444B5B"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <path
            d="M44.7949 128.805C45.9573 128.395 48.8975 127.821 51.359 128.805"
            stroke="#444B5B"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <path
            d="M45 131.266C46.1624 130.856 49.1026 130.282 51.5641 131.266"
            stroke="#444B5B"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <path
            d="M89.4012 106.513C89.498 101.771 86.2158 93.2474 84.5627 89.5781C83.0305 90.2636 80.1596 91.5619 80.9338 91.2716C81.708 90.9813 84.3208 101.957 85.5304 107.481C86.3046 107.674 88.4335 106.916 89.4012 106.513Z"
            fill="#C4C4C4"
            stroke="#444B5B"
            strokeWidth="0.5"
          />
          <path
            d="M7.01577 107.118C6.91899 102.376 10.2011 93.8518 11.8543 90.1826C13.3865 90.8681 16.2574 92.1664 15.4832 91.8761C14.709 91.5858 12.0962 102.561 10.8866 108.085C10.1124 108.279 7.98346 107.521 7.01577 107.118Z"
            fill="#C4C4C4"
            stroke="#444B5B"
            strokeWidth="0.5"
          />
          <path
            d="M81.1164 51.8371C81.1164 66.2673 88.8582 77.9653 48.6982 77.9653C8.53818 77.9653 16.038 66.2673 16.038 51.8371C16.038 37.407 31.9298 25.709 48.6982 25.709C65.4666 25.709 81.1164 37.407 81.1164 51.8371Z"
            fill="#7BD5E0"
          />
          <path
            d="M81.4138 50.187C81.4138 63.8396 89.162 75.3038 48.9683 75.3038C8.77454 75.3038 16.2806 63.8396 16.2806 50.187C16.2806 36.5344 32.1858 25.4668 48.9683 25.4668C65.7507 25.4668 81.4138 36.5344 81.4138 50.187Z"
            fill="#9BE3E8"
          />
          <path
            d="M19.1119 46.9983C19.1119 53.679 17.3788 68.4089 15.241 68.4089C10.7654 68.4089 8.70898 62.1464 8.70898 55.4658C8.70898 48.7852 10.442 43.3694 12.5798 43.3694C18.4067 43.3694 19.1119 40.3177 19.1119 46.9983Z"
            fill="#303140"
          />
          <path
            d="M19.1119 46.5039C19.1119 52.0933 17.3788 64.4173 15.241 64.4173C10.7654 64.4173 8.70898 59.1777 8.70898 53.5883C8.70898 47.9989 10.442 43.4677 12.5798 43.4677C18.4067 43.4677 19.1119 40.9145 19.1119 46.5039Z"
            fill="#4A4E62"
          />
          <path
            d="M78.143 47.2102C78.143 53.8909 79.8761 68.6208 82.0139 68.6208C86.4895 68.6208 88.5459 62.3584 88.5459 55.6777C88.5459 48.9971 86.8129 43.5813 84.6751 43.5813C78.8482 43.5813 78.143 40.5296 78.143 47.2102Z"
            fill="#353D4D"
          />
          <path
            d="M25.4156 85.6515C26.2402 79.7195 31.3123 75.3037 37.3013 75.3037H59.527C65.4385 75.3037 70.4695 79.609 71.3829 85.4496L75.3295 110.686C76.4402 117.788 71.0999 124.266 63.9163 124.532L47.4179 125.141L33.302 124.569C26.2181 124.282 20.9259 117.949 21.9021 110.926L25.4156 85.6515Z"
            fill="#7BD5E0"
          />
          <path
            d="M25.3088 85.4434L22.5184 107.417C22.2173 109.789 23.6268 112.057 25.9319 112.691C34.6759 115.098 49.5768 117.608 68.0167 113.456C70.3428 112.932 71.8873 110.748 71.6994 108.371C70.7778 96.7146 69.5641 88.9324 68.2558 84.0957C67.605 81.6898 65.0614 80.572 62.6153 81.0506C52.5785 83.0145 39.787 82.1884 31.3961 80.9642C28.4825 80.5392 25.6797 82.5224 25.3088 85.4434Z"
            fill="#9BE3EC"
          />
          <path
            d="M30.7767 90.5591C31.5994 84.6252 36.6723 80.207 42.663 80.207H54.3716C60.285 80.207 65.3169 84.5149 66.2282 90.3577L68.3198 103.767C69.4272 110.868 64.0882 117.343 56.907 117.608L47.7432 117.948L40.3114 117.646C33.2297 117.358 27.9388 111.028 28.9121 104.008L30.7767 90.5591Z"
            fill="#444B5B"
          />
          <circle cx="18.1442" cy="83.2877" r="9.43517" fill="#353D4D" />
          <path
            d="M27.3378 81.5942C27.3378 85.2686 23.8429 88.1263 19.2332 88.1263C14.6236 88.1263 9.07227 85.1476 9.07227 81.4733C9.07227 77.7989 13.5349 73.8525 18.1445 73.8525C22.7542 73.8525 27.3378 77.9199 27.3378 81.5942Z"
            fill="#444B5B"
          />
          <circle cx="79.11" cy="83.2877" r="9.43517" fill="#353D4D" />
          <ellipse
            cx="7.86497"
            cy="110.924"
            rx="7.08989"
            ry="3.88256"
            transform="rotate(15.3589 7.86497 110.924)"
            fill="#7BD5E0"
          />
          <ellipse
            cx="8.00508"
            cy="110.323"
            rx="6.44993"
            ry="3.08843"
            transform="rotate(15.3589 8.00508 110.323)"
            fill="#90E2EB"
          />
          <ellipse
            rx="7.08989"
            ry="3.88256"
            transform="matrix(-0.964286 0.264864 0.264864 0.964286 88.427 109.924)"
            fill="#7BD5E0"
          />
          <path
            d="M82.8068 34.4252C51.7261 43.6431 24.3581 37.9213 14.5593 33.9082C12.7275 36.0945 13.796 38.9554 14.5593 40.1125C41.3856 49.2713 71.2353 43.9287 82.8068 40.1125C84.8749 37.2763 83.6685 35.1392 82.8068 34.4252Z"
            fill="#FECA00"
            stroke="#353D4D"
            strokeWidth="3"
          />
          <path
            d="M81.8687 34.3256C56.4014 43.6026 26.9899 38.191 15.4676 34.3256C12.9268 22.4488 21.4011 15.1464 25.9559 12.9798C29.324 8.07544 40.2603 4.97821 45.3075 4.04264C45.7802 1.91544 46.0236 1.75775 49.1257 2.20086C52.9151 1.68386 52.3243 3.13168 52.9151 4.04264C61.1876 5.34259 69.1646 10.8871 72.119 13.4968C83.405 19.2285 83.3213 29.7709 81.8687 34.3256Z"
            fill="#FEE200"
            stroke="#353D4D"
            strokeWidth="3"
          />
          <path
            d="M81.3223 34.4084C56.2804 42.0449 27.3601 37.5903 16.0302 34.4084C13.5318 24.6317 21.8646 18.6206 26.3433 16.8371C29.6551 12.8 40.4088 10.2504 45.3717 9.48027C45.8365 7.72922 46.0758 7.59941 49.1262 7.96417C52.8523 7.53859 52.2713 8.7304 52.8523 9.48027C60.9866 10.5504 68.8304 15.1144 71.7355 17.2627C82.833 21.9808 82.7507 30.6591 81.3223 34.4084Z"
            fill="#FEC900"
          />
          <path
            d="M44.9941 4.79688V39.0543M53.5002 5.24297V39.5004"
            stroke="#353D4D"
            strokeWidth="3"
          />
          <path
            d="M40.4957 6.75195C40.1386 6.80927 37.5 7.50024 37 8.00024V30.9966C37.5206 31.6175 38.9486 32.4868 40.4957 30.9966V6.75195Z"
            fill="#FFA616"
          />
          <path
            d="M58.0278 6.89355C58.3823 6.95225 60.5 7.49963 61.5 8.49963L61.4984 30.5205C60.9815 31.1564 59.5638 32.0466 58.0278 30.5205V6.89355Z"
            fill="#FFA616"
          />
          <ellipse
            cx="29.1811"
            cy="23.1935"
            rx="4.7271"
            ry="3.24988"
            transform="rotate(-35.3944 29.1811 23.1935)"
            fill="#FFE200"
          />
          <ellipse
            cx="23.3942"
            cy="28.0752"
            rx="1.94217"
            ry="1.33524"
            transform="rotate(-156.631 23.3942 28.0752)"
            fill="#FEE200"
          />
          <path
            d="M82.0431 36.9693C50.6673 46.8842 24.9571 40.8763 15.4669 36.7451C15.2427 36.9693 15.4669 38.0901 15.7306 38.7841C16.0417 39.603 46.9507 49.3336 81.5948 38.7626C81.8189 38.3143 82.2673 37.4176 82.0431 36.9693Z"
            fill="#FFA519"
          />
          <path
            d="M78.143 46.5039C78.143 52.0933 79.8761 64.4173 82.0139 64.4173C86.4895 64.4173 88.5459 59.1777 88.5459 53.5883C88.5459 47.9989 86.8129 43.4677 84.6751 43.4677C78.8482 43.4677 78.143 40.9145 78.143 46.5039Z"
            fill="#4A4E62"
          />
          <path
            d="M88.4244 81.5938C88.4244 85.2682 84.9295 88.1259 80.3199 88.1259C75.7102 88.1259 69.917 85.2682 69.917 81.5938C69.917 77.9195 74.3926 73.7312 79.2312 73.8522C83.8408 73.8522 88.4244 77.9195 88.4244 81.5938Z"
            fill="#444B5B"
          />
          <path
            d="M14.5543 45.9139C13.0725 46.3572 11.4758 47.5722 11.2775 50.5989"
            stroke="#686C81"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M82.7387 45.8778C84.2205 46.3211 85.8172 47.5361 86.0154 50.5628"
            stroke="#686C81"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <ellipse
            cx="16.3303"
            cy="78.2069"
            rx="2.54024"
            ry="1.93542"
            fill="#686C81"
          />
          <ellipse
            cx="81.9764"
            cy="78.1057"
            rx="2.54024"
            ry="1.93542"
            transform="rotate(24.0274 81.9764 78.1057)"
            fill="#686C81"
          />
          <circle cx="38.8292" cy="52.2003" r="3.50795" fill="#303140" />
          <circle cx="38.3452" cy="52.6841" r="1.3306" fill="white" />
          <circle cx="39.555" cy="50.7484" r="0.604818" fill="white" />
          <circle cx="58.9093" cy="52.2003" r="3.50795" fill="#303140" />
          <path
            d="M43.0635 61.5137C44.8376 64.0136 49.5955 66.8361 54.676 61.5137"
            stroke="#303140"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="58.9097" cy="52.6841" r="1.3306" fill="white" />
          <circle cx="60.1195" cy="50.7484" r="0.604818" fill="white" />
          <path
            d="M82.8426 111.483C83.2944 113.128 86.4452 113.697 89.8802 112.753C93.3152 111.81 95.7335 109.711 95.2818 108.067C94.83 106.422 91.3868 105.838 87.9518 106.782C84.5169 107.725 82.3908 109.839 82.8426 111.483Z"
            fill="#90E2EB"
          />
          <path
            d="M4.6748 109.658C5.09129 110.193 6.623 111.258 9.41791 111.247"
            stroke="#D7FBFB"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M87.0938 110.375C87.7579 110.509 89.6143 110.319 91.7267 108.489"
            stroke="#D7FBFB"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="38.2248" cy="84.0139" r="0.725782" fill="#9BE3E8" />
          <circle cx="36.7727" cy="110.384" r="0.725782" fill="#9BE3E8" />
          <circle cx="59.2727" cy="84.0139" r="0.725782" fill="#9BE3E8" />
          <circle cx="60.966" cy="110.142" r="0.725782" fill="#9BE3E8" />
          <path
            d="M82.5 94.5003C82.8333 93.667 84 93.0004 86 93.5003M83.5 97.5004C84 96.667 85 95.2003 87 96.0003M84 100.5C84.5 99.667 85.6 98.3004 88 99.5004M84.5 103C85.1667 102.334 87 101.3 89 102.5"
            stroke="#444B5B"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <path
            d="M27.5781 93C26.9114 94.5 25.6781 98.7 26.0781 103.5"
            stroke="#D7FBFB"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M11 93C11.6667 93 12.8 93.3 14 94.5M10 95.5C10.8333 95.3333 12.7 95.4 13.5 97M9 98.5C9.83333 98.3333 11.3 98.4 12.5 100M8 102C9 101.667 11.2 101.4 12 103M7.5 105C8.5 104.5 10.7 104.3 11.5 105.5"
            stroke="#444B5B"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <path
            d="M49 134C49.8889 134 51.2222 134.167 53 135"
            stroke="#D8FFFD"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
          <path
            d="M45 135C42.8076 135.667 38.5461 138.6 39.0394 145"
            stroke="#D8FFFD"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
          <path
            d="M46.2101 134.39C46.5671 134.3 47.3625 134.131 47.6878 134.174"
            stroke="#D8FFFD"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
        </svg>
        <img src={Arrow} alt="Arrow"></img>
        <Box letter="i" num={3}></Box>
      </div>
    </div>
  );
  const nums = Array.from({ length: 72 }, (_, index) => index + 1);
  const nums1 = nums.slice(0, 24);
  const nums2 = nums.slice(24, 48);
  const nums3 = nums.slice(48, 72);
  return (
    <div>
      <AppWrapper section={HeaderSections.DEMO_SECTION}>
        <div id="layout">
          <p className="description">
            {nums1.map((num) => (
              <ShelfAddress key={null} num={num}></ShelfAddress>
            ))}
            <br></br>
            {nums2.map((num) => (
              <ShelfAddress key={null} num={num}></ShelfAddress>
            ))}
            <br></br>
            {nums3.map((num) => (
              <ShelfAddress key={null} num={num}></ShelfAddress>
            ))}
            <br></br>
          </p>
          <h1 className="header">Demo</h1>
          <Box letter="a" num={1} conf={false}></Box>
          <Box letter="b" num={2} conf={true}></Box>
          <Box letter="c" num={3} conf={false}></Box>
          <Box letter="d" num={4} conf={false}></Box>
          <Box letter="e" num={5} conf={false}></Box>
          <Box letter="f" num={6} conf={false}></Box>
          <img className="pipi" src={Pipi} alt="Pipi"></img>
          <img className="ladder" src={LeftLadder} alt="LeftLadder"></img>
          <img className="ladder" src={RightLadder} alt="RightLadder"></img>
          <div id="inbox-wrapper">
            <AlertInbox header="Hey Pipi, the Box is at address 12!">
              {Popup}
            </AlertInbox>
          </div>
        </div>
      </AppWrapper>
      <NavButtons page={2}></NavButtons>
    </div>
  );
};

export default Demo;
