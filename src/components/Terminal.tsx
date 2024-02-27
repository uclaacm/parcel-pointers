import { CSSProperties, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import atomOneLightCustom from '../styles/Terminal/atom-one-light-custom';
import '../styles/Terminal/Terminal.scss';

export interface TerminalProps {
  code: string;
  styles?: CSSProperties;
}

SyntaxHighlighter.registerLanguage('cpp', cpp);

export default function Terminal(props: TerminalProps): JSX.Element {
  const [alert, setAlert] = useState(false);

  const alertFunction = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  };

  return (
    <div className="terminal-container">
      {alert ? (
        <div className={alert ? 'copyalert fadeout' : 'hiddenalert'}>
          <p>Copied to Clipboard</p>
        </div>
      ) : (
        <></>
      )}

      <div className="terminal" style={props.styles}>
        <CopyToClipboard
          text={props.code}
          onCopy={() => {
            alertFunction();
          }}
        >
          <FaRegCopy className="copybutton" />
        </CopyToClipboard>

        <SyntaxHighlighter language="cpp" style={atomOneLightCustom}>
          {props.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
