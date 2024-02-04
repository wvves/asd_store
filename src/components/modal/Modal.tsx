import React from 'react';
import classes from './Modal.module.css';

interface ModalProps extends React.HtmlHTMLAttributes<HTMLElement> {
  modal: boolean;
  closeModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  const [focusedInput, setFocusedInput] = React.useState<boolean>(false);
  // console.log(focusedInput)
  return (
    <div
      className={focusedInput ? classes.back_block : classes.back}
      onClick={() => closeModal()}
    >
      <div
        className={classes.modal_window}
        onClick={(event) => event.stopPropagation()}
        onFocus={() => setFocusedInput(true)}
        onBlur={() => setFocusedInput(false)}
      >
        <div className={classes.close_icon} onClick={closeModal}>
          &times;
        </div>
        {children}
      </div>
    </div>
  );
};
