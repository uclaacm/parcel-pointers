import { useEffect, useState } from 'react';

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
        <div className="close" onClick={handleClose}>
          let&apos;s go!
        </div>
      </div>
    </div>
  );
}

export default Popup;
