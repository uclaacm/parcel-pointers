import { useEffect, useState } from 'react';
import Close from '../../../public/Close.png';

export interface PopupProps {
  title: string;
  show: boolean;
  onClose: () => void;
  children?: JSX.Element | string;
}

function Popup(props: PopupProps): JSX.Element {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    props.onClose();
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
      }}
      className="overlay"
    >
      <div className="popup">
        <h2>{props.title}</h2>
        <div className="content">{props.children}</div>
        <button
          className="close-button"
          style={{ backgroundImage: `url(${Close})` }}
          onClick={handleClose}
        ></button>
        <button
          id="start-button"
          onClick={handleClose}
        >
        <p id="button-text">Let&apos;s go!</p>
      </button>
      </div>
    </div>
  );
}

export default Popup;
