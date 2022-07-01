/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { handleClick } = this.props;
    handleClick(e.target.innerText);
  }

  render() {
    const { item, buttonClass } = this.props;
    return (
      <button
        type="button"
        className={`${buttonClass}`}
        onClick={this.handleClick}
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
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  item: undefined,
  buttonClass: 'btn',
  handleClick: () => {},
};
