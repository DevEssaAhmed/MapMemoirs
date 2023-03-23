import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalHook = document.getElementById("modal-hook");
const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault
        }
      >
        <div className={`modal__content ${props.contentClass} `}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return createPortal(content, modalHook);
};

const Modal = (props) => {
  return (
    <>
      <ModalOverlay {...props} />
    </>
  );
};

export default Modal;
