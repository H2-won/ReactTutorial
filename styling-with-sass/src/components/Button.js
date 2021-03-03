import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// size: large, medium, small
// color: blue, pink, gray
// outline, fullWidth 는 boolean 값으로, 객체로 넣어줘서 true면 적용되고, false면 적용안되게 해주는 방식이다.
function Button({ children, size, color, outline, fullWidth }) {
  return (
    <button
      className={classNames('Button', size, color, {
        outline,
        fullWidth,
      })}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
