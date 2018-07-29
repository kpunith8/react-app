import React, { Component } from 'react';

const Input = ({ type, onChange, backgroundColor, value, textColor, children, ...customProps }) => {
  return (
    <div>
      <input type={type} onChange={onChange} value={value}
        style={{ backgroundColor: backgroundColor, color: textColor }} {...customProps} />
      {children}
    </div>
  );
}

export default Input;