import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import atomOneLightCustom from '../styles/Terminal/atom-one-light-custom';
import '../styles/CompareCode.scss';

export interface CompareCodeProps {
  code1: string;
  caption1: string;
  code2: string;
  caption2: string;
}

SyntaxHighlighter.registerLanguage('cpp', cpp);

export default function CompareCode(props: CompareCodeProps): JSX.Element {
  return (
    <div className="compare">
      <div className="left-code">
        <h1 className="caption">{props.caption1}</h1>
        <SyntaxHighlighter
          language="cpp"
          style={atomOneLightCustom} // fix needed
          customStyle={{ paddingRight: '65px' }}
        >
          {props.code1}
        </SyntaxHighlighter>
      </div>
      <div className="right-code">
        <h1 className="caption">{props.caption2}</h1>
        <SyntaxHighlighter
          language="cpp"
          style={atomOneLightCustom} // fix needed
          customStyle={{ paddingRight: '65px' }}
        >
          {props.code2}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
