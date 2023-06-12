import React from "react";
import "./styles.css";

const Modal = ({
  children,
  title,
  open = false,
  close = () => {},
  hasButtonClose = true,
}) => {
  if (!open) return null;

  return (
    <>
      {open && 
        (
          <>
            <div className="container-overlay" />
            <div className="container-modal">
              <div className="container-button-close">
                <span className="title-modal">{title}</span>
                {hasButtonClose && (
                  <button className="button-close" onClick={close}>
                    x
                  </button>
                )}
              </div>

              {children}
            </div>
          </>
        )
      }
    </>
  );
};

export default Modal;