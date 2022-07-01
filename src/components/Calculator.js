/* eslint-disable react/prefer-stateless-function */
/* eslint-disable class-methods-use-this */

import React from 'react';
import Button from './Button';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculateObj: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
    this.operColum = ['÷', 'x', '-', '+', '='];
    this.operRow = ['AC', '+/-', '%'];
  }

  componentDidMount() {
    this.setState({
      calculateObj: {
        total: null,
        next: null,
        operation: null,
      },
    });
  }

  handleClick(buttonName) {
    this.setState((state) => ({ calculateObj: calculate(state.calculateObj, buttonName) }
    ));
  }

  buttonNumber() {
    const btnNumber = this.numbers.map((num) => (
      <Button
        key={num}
        buttonClass={`btn ${num === '0' ? 'btn__number0' : ''}`}
        item={num}
        handleClick={this.handleClick}
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
        handleClick={this.handleClick}
      />
    ));
    return btnSignOperation;
  }

  render() {
    const { calculateObj } = this.state;
    const result = calculateObj.next || calculateObj.total || '0';
    return (
      <div className="calculator">
        <div className="calculator__container">
          <div className="result">
            {result}
          </div>
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
