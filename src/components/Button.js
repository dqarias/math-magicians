/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, buttonClass } = this.props;
    return (
      <button
        type="button"
        className={`${buttonClass}`}
      >
        {item}
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  item: PropTypes.string,
  buttonClass: PropTypes.string,
};

Button.defaultProps = {
  item: undefined,
  buttonClass: 'btn',
};
