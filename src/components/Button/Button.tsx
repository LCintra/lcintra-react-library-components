import React from 'react';
import * as Styles from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({
  label = "Text",
  disabled = false,
  type = "primary",
  onClick,
}:ButtonProps) => {
  const handleOnClick = (event: React.FormEvent) => {
    onClick && onClick(event);
  };

  return (
    <Styles.Button
      disabled={disabled}
      type={type}
      onClick={(event: React.FormEvent) => handleOnClick(event)}
    >
      {label}
    </Styles.Button>
  );
};

export default Button;
