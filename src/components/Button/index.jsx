import React from "react";
import "./styles.css";

const Button = ({ onClick, children, styles, className }) => {
  return (
    <button
      style={styles}
      onClick={onClick}
      className={`button-c ${className}`}
    >
      {children}
    </button>
  );
};

export default Button