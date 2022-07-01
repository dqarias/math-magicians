import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  const operColum = ['÷', 'x', '-', '+', '='];
  const operRow = ['AC', '+/-', '%'];

  const [calculateObj, setCalculateObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next } = calculateObj;

  const handleClick = (buttonName) => {
    console.log('clicked');
    setCalculateObj((prevState) => calculate(prevState, buttonName));
  };

  const buttonNumber = () => {
    const btnNumber = numbers.map((num) => (
      <Button
        key={num}
        buttonClass={`btn ${num === '0' ? 'btn__number0' : ''}`}
        item={num}
        handleClick={handleClick}
      />
    ));
    return btnNumber;
  };

  const buttonOperation = (operation) => {
    const btnSignOperation = operation.map((sign) => (
      <Button
        key={sign}
        buttonClass={`btn ${sign === 'AC' || sign === '+/-' || sign === '%' ? '' : 'btn__signs'}`}
        item={sign}
        handleClick={handleClick}
      />
    ));
    return btnSignOperation;
  };

  return (

    <div className="calculator">
      <div className="calculator__container">
        <div className="result">
          {next || total || '0'}
        </div>
        <div className="operation__column">
          {buttonOperation(operColum)}
        </div>
        <div className="operation__row">
          {buttonOperation(operRow)}
        </div>
        <div className="numbers">
          {buttonNumber()}
        </div>

      </div>

    </div>
  );
};

export default Calculator;

/* import React from 'react';
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

export default Calculator; */
