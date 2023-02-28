import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import atomOneLightCustom from '../styles/Terminal/atom-one-light-custom';
import '../styles/Terminal/Terminal.scss';

export interface TerminalProps {
  code: string;
}

SyntaxHighlighter.registerLanguage('cpp', cpp);

export default function Terminal(props: TerminalProps): JSX.Element {
  return (
    <div className="terminal">
      <SyntaxHighlighter
        language="cpp"
        style={atomOneLightCustom} // this error doesn't affect the custom theme, will fix later
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
}
