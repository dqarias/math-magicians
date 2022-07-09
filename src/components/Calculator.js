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
    <div className="main__container">
      <div className="text-container-calc">
        <p className="main__subtitle">Lets do some math!</p>
      </div>
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
    </div>

  );
};

export default Calculator;
