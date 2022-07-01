/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */

import React from 'react';
import Button from './Button';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
    this.operColum = ['÷', 'x', '-', '+', '='];
    this.operRow = ['AC', '+/-', '%'];
  }

  buttonNumber() {
    const btnNumber = this.numbers.map((num) => (
      <Button
        key={num}
        buttonClass={`btn ${num === '0' ? 'btn__number0' : ''}`}
        item={num}
      />
    ));
    return btnNumber;
  }

  buttonOperation(operation) {
    const btnSignOperation = operation.map((sign) => (
      <Button
        key={sign}
        buttonClass={`btn ${sign === 'AC' || sign === '+/-' || sign === '%' ? '' : 'btn__signs'}`}
        item={sign}
      />
    ));
    return btnSignOperation;
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator__container">
          <div className="result">0</div>
          <div className="operation__column">
            {this.buttonOperation(this.operColum)}
          </div>
          <div className="operation__row">
            {this.buttonOperation(this.operRow)}
          </div>
          <div className="numbers">
            {this.buttonNumber()}
          </div>

        </div>

      </div>
    );
  }
}

export default Calculator;
