import { useEffect, useState, useRef } from 'react';
import Close from '../../../public/Close.png';

export interface PopupProps {
  title: string;
  show: boolean;
  onClose: () => void;
  children?: JSX.Element | string;
}

function Popup(props: PopupProps): JSX.Element {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setShow(false);
    props.onClose();
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  // Close the popup if click outside of popup
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        props.show == true &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Element)
      ) {
        handleClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside); // Bind the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Unbind the event listener on clean up
    };
  }, [wrapperRef, props.show]);

  return (
    <div
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
      }}
      className="overlay"
    >
      <div className="popup" ref={wrapperRef}>
        <h2>{props.title}</h2>
        <div className="content">{props.children}</div>
        <button
          className="close-button"
          style={{ backgroundImage: `url(${Close})` }}
          onClick={handleClose}
        ></button>
        <button id="start-button" onClick={handleClose}>
          <p id="button-text">Let&apos;s go!</p>
        </button>
      </div>
    </div>
  );
}

export default Popup;
