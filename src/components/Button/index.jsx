import React from "react";
import "./styles.css";

const Button = ({ onClick, children, styles={}, className="", primary=true }) => {
  return (
    <button
      style={styles}
      onClick={onClick}
      className={`button-primary ${primary ? "" : "button-wb"} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button