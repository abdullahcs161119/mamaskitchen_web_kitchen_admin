import React from 'react';
import whiteLogo from '../images/white-logo.png';

const Logo = props => {
  return (
    <img
      style={{ transform: 'translateY(10px)' }}
      alt="Logo"
      src={whiteLogo}
      {...props}
    />
  );
};

export default Logo;
