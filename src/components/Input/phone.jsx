import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const InputPhone = ({ classInput, classNameContainer, placeholder, handleChangePhone, value, rest }) => {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".

  // If `country` property is not passed
  // then "International" format is used.
  // Otherwise, "National" format is used.

  return (
    <div className={classNameContainer}>
        <PhoneInput
            className={classInput}
            defaultCountry="AR"
            placeholder={placeholder}
            value={value}
            onChange={handleChangePhone}
            {...rest}
        />
    </div>
  )
};

export default InputPhone;