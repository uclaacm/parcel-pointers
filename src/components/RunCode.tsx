import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import React, { CSSProperties, useEffect, useState } from 'react';
import SelectCode from './SelectCode';
import '../styles/RunCode.scss';
import Terminal from './Terminal';

interface RunCodeProps {
  displayText: string;
  questions: Array<{
    question?: string;
    options: string[];
    answer: string;
    correctText: string;
    wrongText: string;
  }>;
  check?: boolean;
  styles?: CSSProperties;
}

const RunCode: React.FC<RunCodeProps> = ({
  displayText,
  questions,
  check = false,
  styles,
}) => {
  const [selections, setSelections] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Array<boolean | null>>([]);

  useEffect(() => {
    if (selections.length == 0) {
      const tempArr: string[] = [];
      const ansArr: Array<boolean | null> = [];
      questions.forEach((question) => {
        tempArr.push(question.options[0]);
        ansArr.push(null);
      });
      setSelections(tempArr);
      setAnswers(ansArr);
    }
  }, [selections, answers]);

  const handleClick = () => {
    const temp = answers;
    questions.forEach((question, index) => {
      temp[index] = selections[index] == question.answer;
    });
    setAnswers([...temp]);
  };

  return (
    <div className="box-container" style={styles}>
      {displayText && (
        <Terminal styles={{ width: '100%' }} code={displayText}></Terminal>
      )}

      {questions.map((question, index) => {
        return (
          <div className="code-select-container" key={index}>
            {question.question && <h3>{question.question}</h3>}
            <div className="code-select" key={index}>
              <SelectCode
                choices={question.options}
                handleClick={(value: string) => {
                  const temp = selections;
                  temp[index] = value;
                  setSelections(temp);
                }}
              />
              <CheckCircleIcon
                fontSize="large"
                className="icon"
                style={
                  answers[index] != null
                    ? { color: answers[index] ? '#31A74B' : '#a80000' }
                    : { color: '#817F7F' }
                }
              />
            </div>
            <div
              style={{
                opacity: answers[index] != null ? '1' : '0',
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5rem',
              }}
            >
              <svg
                width="26"
                height="33"
                viewBox="0 0 26 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lightbulb-icon"
              >
                <path
                  d="M21.2731 2.73177C19.7784 1.59722 18.0282 0.784931 16.1501 0.354179C14.2719 -0.0765736 12.3133 -0.114926 10.4171 0.241919C7.89223 0.712625 5.57577 1.86493 3.76161 3.55265C1.94745 5.24036 0.717362 7.3874 0.227426 9.72136C-0.130356 11.4713 -0.0653411 13.2726 0.417832 14.9968C0.901004 16.7209 1.79043 18.3254 3.02268 19.6958C4.16627 20.8868 4.82177 22.4099 4.87535 24.0005V28.5003C4.87535 29.6937 5.38901 30.8382 6.30333 31.6821C7.21766 32.5259 8.45774 33 9.75079 33H16.2514C17.5444 33 18.7845 32.5259 19.6988 31.6821C20.6132 30.8382 21.1268 29.6937 21.1268 28.5003V24.2855C21.1814 22.5294 21.8804 20.8424 23.1095 19.5008C25.263 17.0421 26.2782 13.8983 25.9343 10.7527C25.5904 7.60714 23.9153 4.71389 21.2731 2.70178V2.73177ZM17.8765 28.5003C17.8765 28.8981 17.7053 29.2796 17.4005 29.5609C17.0958 29.8422 16.6824 30.0002 16.2514 30.0002H9.75079C9.31977 30.0002 8.90641 29.8422 8.60164 29.5609C8.29686 29.2796 8.12564 28.8981 8.12564 28.5003V27.0004H17.8765V28.5003ZM20.5905 17.6409C18.9564 19.4297 18.0031 21.6637 17.8765 24.0005H14.6262V19.5008C14.6262 19.103 14.455 18.7215 14.1502 18.4402C13.8455 18.1589 13.4321 18.0009 13.0011 18.0009C12.5701 18.0009 12.1567 18.1589 11.8519 18.4402C11.5472 18.7215 11.3759 19.103 11.3759 19.5008V24.0005H8.12564C8.08276 21.7028 7.16184 19.4929 5.52541 17.7609C4.44573 16.567 3.71969 15.1352 3.4181 13.6052C3.1165 12.0751 3.24963 10.4991 3.80452 9.0307C4.3594 7.56231 5.3171 6.25168 6.58423 5.22662C7.85135 4.20155 9.38467 3.49703 11.0347 3.18175C12.4527 2.91228 13.9179 2.93763 15.324 3.25595C16.7301 3.57427 18.0418 4.17758 19.1637 5.02207C20.2857 5.86656 21.1898 6.93104 21.8105 8.13823C22.4312 9.34542 22.7528 10.665 22.752 12.0012C22.764 14.0559 21.9997 16.0502 20.5905 17.6409Z"
                  fill={answers[index] ? '#31A74B' : '#a80000'}
                />
              </svg>
              <p style={{ color: answers[index] ? '#31A74B' : '#a80000' }}>
                {answers[index] ? question.correctText : question.wrongText}
              </p>
            </div>
          </div>
        );
      })}

      <div className="run-button" onClick={() => handleClick()}>
        <p className="run-text">{check ? 'Check' : 'Run'}</p>
      </div>
    </div>
  );
};

export default RunCode;
