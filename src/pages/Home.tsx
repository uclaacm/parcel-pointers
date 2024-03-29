import { FC } from 'react';
import LandingBackground from '../../public/LandingBackground.png';
import AppWrapper from '../components/AppWrapper';
import { HeaderSections } from '../types/globalTypes';
import '../assets/WestwoodSans-Regular.ttf';
import '../styles/Home.scss';

const Home: FC = () => {
  return (
    <div>
      <AppWrapper section={HeaderSections.TITLE_SECTION}>
        <div
          id="container"
          style={{ backgroundImage: `url(${LandingBackground})` }}
        >
          <div id="layout">
            <div id="col-1">
              <h1 id="title">Parcel Pointers</h1>
              <p id="description">
                Welcome to Parcel Pointers! This learning lab is designed to
                help you learn everything about pointers and how they are used
                by following our robot Pipi through a warehouse. By the end of
                the learning lab, hopefully you should know how and where to use
                pointers in your own projects!
              </p>
              <button
                id="start-button"
                onClick={() => (window.location.href = '/pointer-motivation')}
              >
                <p id="button-text">Let&apos;s go!</p>
              </button>
            </div>
            <div id="col-2">
              <div className="pp-wrapper">
                <svg
                  width="418"
                  height="587"
                  viewBox="0 0 418 587"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ maxWidth: 'none' }}
                >
                  <rect
                    x="77.6523"
                    y="310"
                    width="263.248"
                    height="35.3617"
                    fill="#BC8239"
                  />
                  <g filter="url(#filter0_d_32_358)">
                    <path
                      d="M42.3637 348.23L75.7979 312.009C76.1749 311.601 75.704 310.974 75.2069 311.223L42.3575 327.647C42.3133 327.67 42.2726 327.698 42.2367 327.732L5.00408 363.103C4.60033 363.487 5.0315 364.144 5.54403 363.926L42.1919 348.351C42.2571 348.323 42.3156 348.282 42.3637 348.23Z"
                      fill="#EBC99C"
                    />
                  </g>
                  <g filter="url(#filter1_d_32_358)">
                    <path
                      d="M376.19 348.23L342.755 312.009C342.378 311.601 342.849 310.974 343.346 311.223L376.196 327.648C376.24 327.67 376.281 327.698 376.317 327.732L413.549 363.103C413.953 363.487 413.522 364.144 413.009 363.926L376.361 348.351C376.296 348.323 376.238 348.282 376.19 348.23Z"
                      fill="#EBC99C"
                    />
                  </g>
                  <path
                    d="M227.87 243.463C228.955 245.74 232.319 250.112 237.098 249.387"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M233.501 235.618C233.663 237.7 235.871 242.19 243.402 243.491"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M238.047 228.969C238.333 231.675 240.785 237.253 248.301 237.913M244.622 221.214C244.821 223.786 247.022 229.488 254.24 231.731"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M251.34 214.452C251.636 217.044 253.888 222.579 260.53 223.981"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M221.54 425L222.961 389H238.039L239.46 425H221.54Z"
                    fill="#C4C4C4"
                    stroke="#444B5B"
                    strokeWidth="2"
                  />
                  <circle
                    cx="230.5"
                    cy="438.5"
                    r="23.5"
                    fill="#303140"
                    stroke="#7BD5E0"
                    strokeWidth="8"
                  />
                  <path
                    d="M222.5 396.325C225.333 395.325 232.5 393.925 238.5 396.325"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M222 402.15C224.833 401.15 232 399.75 238 402.15"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M222.5 408.15C225.333 407.15 232.5 405.75 238.5 408.15"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M379.814 209.842C367.102 217.661 350.137 240.861 343.243 251.484C347.666 254.371 355.991 259.757 353.904 258.203C351.818 256.648 376.41 231.044 388.967 218.436C388.16 216.058 382.529 211.716 379.814 209.842Z"
                    fill="#C4C4C4"
                    stroke="#4A4E62"
                    strokeWidth="2"
                  />
                  <path
                    d="M100.077 335.771C99.7724 320.85 110.1 294.028 115.302 282.482C120.124 284.639 129.157 288.725 126.721 287.811C124.285 286.898 116.064 321.434 112.257 338.816C109.821 339.425 103.122 337.04 100.077 335.771Z"
                    fill="#C4C4C4"
                    stroke="#4A4E62"
                    strokeWidth="2"
                  />
                  <path
                    d="M333.248 161.821C333.248 207.229 357.608 244.038 231.238 244.038C104.867 244.038 128.466 207.229 128.466 161.821C128.466 116.414 178.473 79.6043 231.238 79.6043C284.002 79.6043 333.248 116.414 333.248 161.821Z"
                    fill="#7BD5E0"
                  />
                  <path
                    d="M334.182 156.63C334.182 199.59 358.564 235.664 232.087 235.664C105.61 235.664 129.229 199.59 129.229 156.63C129.229 113.669 179.278 78.8431 232.087 78.8431C284.896 78.8431 334.182 113.669 334.182 156.63Z"
                    fill="#9BE3E8"
                  />
                  <path
                    d="M138.14 146.596C138.14 167.618 132.687 213.968 125.96 213.968C111.877 213.968 105.406 194.262 105.406 173.24C105.406 152.219 110.859 135.177 117.586 135.177C135.921 135.177 138.14 125.574 138.14 146.596Z"
                    fill="#303140"
                  />
                  <path
                    d="M138.14 145.04C138.14 162.628 132.687 201.407 125.96 201.407C111.877 201.407 105.406 184.92 105.406 167.332C105.406 149.744 110.859 135.486 117.586 135.486C135.921 135.486 138.14 127.451 138.14 145.04Z"
                    fill="#4A4E62"
                  />
                  <path
                    d="M158.305 265.845C160.711 248.544 175.504 235.664 192.972 235.664H267.674C284.916 235.664 299.59 248.222 302.254 265.257L315.518 350.071C318.757 370.785 303.182 389.681 282.229 390.455L227.209 392.486L179.749 390.563C159.088 389.726 143.652 371.254 146.5 350.773L158.305 265.845Z"
                    fill="#7BD5E0"
                  />
                  <path
                    d="M159.498 258.357L147.125 347.776C146.471 352.502 149.233 357.054 153.811 358.396C181.571 366.534 233.103 374.626 297.693 358.018C302.258 356.844 305.285 352.527 304.951 347.825C301.632 301.082 297.01 272.073 292.079 255.903C290.591 251.023 285.338 248.732 280.382 249.94C245.38 258.468 198.863 254.497 171.731 249.673C165.938 248.644 160.304 252.528 159.498 258.357Z"
                    fill="#9BE3EC"
                  />
                  <circle
                    cx="135.095"
                    cy="260.786"
                    r="29.6895"
                    fill="#303140"
                  />
                  <path
                    d="M164.023 255.457C164.023 267.019 153.026 276.012 138.521 276.012C124.016 276.012 106.548 266.639 106.548 255.077C106.548 243.515 120.59 231.097 135.095 231.097C149.6 231.097 164.023 243.895 164.023 255.457Z"
                    fill="#444B5B"
                  />
                  <circle
                    cx="326.935"
                    cy="260.786"
                    r="29.6895"
                    fill="#303140"
                  />
                  <ellipse
                    cx="102.749"
                    cy="347.752"
                    rx="22.3096"
                    ry="12.2172"
                    transform="rotate(15.3589 102.749 347.752)"
                    fill="#7BD5E0"
                  />
                  <ellipse
                    cx="103.19"
                    cy="345.859"
                    rx="20.2959"
                    ry="9.71831"
                    transform="rotate(15.3589 103.19 345.859)"
                    fill="#90E2EB"
                  />
                  <ellipse
                    rx="22.3096"
                    ry="12.2172"
                    transform="matrix(0.744586 0.667527 0.667527 -0.744586 391.466 205.989)"
                    fill="#7BD5E0"
                  />
                  <path
                    d="M338.567 107.031C240.766 136.037 154.648 118.032 123.814 105.404C118.05 112.284 121.412 121.286 123.814 124.927C208.228 153.747 302.155 136.935 338.567 124.927C345.075 116.002 341.279 109.278 338.567 107.031Z"
                    fill="#FECA00"
                    stroke="#444B5B"
                    strokeWidth="10"
                  />
                  <path
                    d="M335.617 106.719C255.479 135.91 162.931 118.882 126.673 106.719C118.678 69.3459 145.344 46.3676 159.677 39.55C170.275 24.1175 204.688 14.3715 220.57 11.4275C222.057 4.73392 222.823 4.23772 232.585 5.63204C244.509 4.00522 242.65 8.56105 244.509 11.4275C270.54 15.5181 295.641 32.9648 304.937 41.1769C340.451 59.2125 340.187 92.3861 335.617 106.719Z"
                    fill="#FEE200"
                    stroke="#444B5B"
                    strokeWidth="10"
                  />
                  <path
                    d="M333.895 106.98C255.095 131.01 164.092 116.992 128.441 106.98C120.579 76.2157 146.8 57.3006 160.893 51.6885C171.314 38.9849 205.153 30.9623 220.769 28.5389C222.232 23.0289 222.985 22.6204 232.584 23.7682C244.309 22.429 242.48 26.1793 244.309 28.5389C269.905 31.9061 294.586 46.2678 303.728 53.0278C338.648 67.8742 338.389 95.1818 333.895 106.98Z"
                    fill="#FEC900"
                  />
                  <path
                    d="M220.57 11.0428V122.603M244.509 11.0428V122.603"
                    stroke="#444B5B"
                    strokeWidth="10"
                  />
                  <path
                    d="M206.858 19.7479C205.742 19.9338 198.5 22.2479 195.934 23.2479V94.1438C197.561 96.1581 202.024 98.9781 206.858 94.1438V19.7479Z"
                    fill="#FFA616"
                  />
                  <path
                    d="M257 19.7479C258.5 19.7479 265.814 22.9732 268.216 23.7479V94.1438C266.589 96.1581 262.127 98.9781 257.292 94.1438L257 19.7479Z"
                    fill="#FFA616"
                  />
                  <ellipse
                    cx="169.824"
                    cy="71.6891"
                    rx="14.8747"
                    ry="10.2264"
                    transform="rotate(-35.3944 169.824 71.6891)"
                    fill="#FFE200"
                  />
                  <ellipse
                    cx="151.614"
                    cy="87.049"
                    rx="6.1114"
                    ry="4.20159"
                    transform="rotate(-156.631 151.614 87.049)"
                    fill="#FEE200"
                  />
                  <path
                    d="M337 113.748C238.27 144.947 155.863 126.248 126 113.248C125 113.748 125.855 119.28 127.5 120.748C129.557 122.583 226.486 154.012 335.5 120.748C336.7 118.948 338 116.748 337 113.748Z"
                    fill="#FFA519"
                  />
                  <path
                    d="M323.89 145.04C323.89 162.628 329.343 201.407 336.07 201.407C350.154 201.407 356.625 184.92 356.625 167.332C356.625 149.744 351.171 135.486 344.444 135.486C326.109 135.486 323.89 127.451 323.89 145.04Z"
                    fill="#4A4E62"
                  />
                  <path
                    d="M356.244 255.457C356.244 267.019 345.246 276.012 330.741 276.012C316.236 276.012 298.007 267.019 298.007 255.457C298.007 243.895 312.09 230.716 327.316 231.097C341.821 231.097 356.244 243.895 356.244 255.457Z"
                    fill="#4A4E62"
                  />
                  <path
                    d="M123.797 143.182C119.134 144.577 114.11 148.401 113.486 157.925"
                    stroke="#686C81"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M338.354 143.07C343.017 144.465 348.041 148.289 348.665 157.813"
                    stroke="#686C81"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="129.386"
                    cy="244.8"
                    rx="7.99332"
                    ry="6.09015"
                    fill="#686C81"
                  />
                  <ellipse
                    cx="335.954"
                    cy="244.482"
                    rx="7.99332"
                    ry="6.09015"
                    transform="rotate(24.0274 335.954 244.482)"
                    fill="#686C81"
                  />
                  <circle
                    cx="200.184"
                    cy="162.963"
                    r="11.0384"
                    fill="#303140"
                  />
                  <circle cx="198.661" cy="164.486" r="4.18698" fill="white" />
                  <circle cx="202.467" cy="158.396" r="1.90317" fill="white" />
                  <circle
                    cx="263.369"
                    cy="162.963"
                    r="11.0384"
                    fill="#303140"
                  />
                  <path
                    d="M213.506 192.272C219.089 200.139 234.06 209.02 250.047 192.272"
                    stroke="#303140"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <circle cx="263.369" cy="164.486" r="4.18698" fill="white" />
                  <circle cx="267.175" cy="158.396" r="1.90317" fill="white" />
                  <path
                    d="M404.698 220.131C408.28 216.135 404.419 206.83 396.073 199.347C387.727 191.865 378.056 189.039 374.474 193.035C370.891 197.032 375.211 207.136 383.557 214.618C391.903 222.101 401.115 224.128 404.698 220.131Z"
                    fill="#90E2EB"
                  />
                  <path
                    d="M92.709 343.765C94.0195 345.446 98.8393 348.8 107.634 348.765"
                    stroke="#D7FBFB"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M394.929 208.749C394.152 206.763 390.488 202.175 382.048 199.702"
                    stroke="#D7FBFB"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M173.315 286.507C176.057 266.727 192.967 252 212.936 252H245.911C265.622 252 282.395 266.36 285.433 285.836L291.331 323.647C295.022 347.314 277.225 368.898 253.288 369.784L226.971 370.758L206.052 369.908C182.447 368.949 164.81 347.849 168.055 324.448L173.315 286.507Z"
                    fill="#444B5B"
                  />
                  <circle
                    cx="198.284"
                    cy="270.284"
                    r="2.28381"
                    fill="#9BE3E8"
                  />
                  <circle
                    cx="193.713"
                    cy="346.048"
                    r="2.28381"
                    fill="#9BE3E8"
                  />
                  <circle
                    cx="265.284"
                    cy="270.284"
                    r="2.28381"
                    fill="#9BE3E8"
                  />
                  <circle cx="269.84" cy="345.287" r="2.28381" fill="#9BE3E8" />
                  <path
                    d="M112.5 290.748C115 290.415 120.5 290.848 122.5 295.248"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M351.856 241.294C352.928 243.577 356.269 247.968 361.052 247.268"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M109 299.748C110.833 298.748 115.8 298.148 121 303.748"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M357.53 233.481C357.681 235.563 359.864 240.065 367.387 241.407"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M105.909 307.186C108.333 305.949 114.345 304.96 119 310.898M103 316.928C105.263 315.691 111.242 314.423 117.061 319.248"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M362.112 226.856C362.383 229.564 364.805 235.155 372.317 235.855M368.729 219.137C368.914 221.709 371.084 227.424 378.289 229.706"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M101 326.248C103.333 325.081 109.2 323.948 114 328.748"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M375.484 212.412C375.766 215.005 377.988 220.552 384.622 221.991"
                    stroke="#444B5B"
                    strokeLinecap="round"
                  />
                  <path
                    d="M166 290C164.043 294.483 160.324 306.559 161.107 319"
                    stroke="#D8FFFD"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M233 415C235 415 238 415.5 242 418"
                    stroke="#D8FFFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M222 417C216.667 418.667 206.3 426 207.5 442"
                    stroke="#D8FFFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M225.449 415.763C226.319 415.543 228.258 415.131 229.051 415.237"
                    stroke="#D8FFFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="231" cy="439" r="4" fill="#7BD5E0" />
                  <rect
                    x="42.2908"
                    y="345.362"
                    width="335.936"
                    height="241.638"
                    rx="5"
                    fill="#E6A352"
                  />
                  <path
                    d="M42.2908 345.362L77.6525 310V345.362H42.2908Z"
                    fill="#936122"
                  />
                  <path
                    d="M377.567 345.362H42.9513C42.6292 345.362 42.3268 345.517 42.1389 345.779L13.9592 385.034C13.4843 385.695 13.9571 386.617 14.7716 386.617H405.746C406.561 386.617 407.034 385.695 406.559 385.034L378.379 345.779C378.191 345.517 377.889 345.362 377.567 345.362Z"
                    fill="#ECC290"
                  />
                  <path
                    d="M376.262 345.362L340.901 310V345.362H376.262Z"
                    fill="#AE752E"
                  />
                  <defs>
                    <filter
                      id="filter0_d_32_358"
                      x="0.844734"
                      y="311.166"
                      width="79.0898"
                      height="60.8029"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_32_358"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_32_358"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_d_32_358"
                      x="338.619"
                      y="311.166"
                      width="79.0898"
                      height="60.8029"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_32_358"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_32_358"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </AppWrapper>
    </div>
  );
};

export default Home;
