import React from "react";

const InputText = ({ 
    placeholder, 
    value, 
    onChange, 
    classNameInput, 
    disabled, 
    maxLength, 
    type="text", 
    classNameContainer, 
    rest 
}) => {
    return (
        <div className={classNameContainer}>
            <input 
                type={type}
                className={classNameInput}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                maxLength={maxLength}
                {...rest}
            />
        </div>
    )
};

export default InputText;