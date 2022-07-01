/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const handleClick = (e) => {
    const { handleClick } = props;
    handleClick(e.target.innerText);
  };

  const { item, buttonClass } = props;

  return (

    <button
      type="button"
      className={`${buttonClass}`}
      onClick={handleClick}
    >
      {item}
    </button>
  );
};

export default Button;

Button.propTypes = {
  item: PropTypes.string,
  buttonClass: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  item: undefined,
  buttonClass: 'btn',
  handleClick: () => {},
};
