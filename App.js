import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  // State to hold the current expression and result
  const [input, setInput] = useState('');

  // Function to update the input when a button is clicked
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to handle the calculation
  const handleCalculate = () => {
    try {
      // Evaluate the expression
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to handle clearing the input
  const handleClear = () => {
    setInput('');
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        {/* Number buttons */}
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>

        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>

        {/* Operator buttons */}
        <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
        <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
        <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
        
        {/* Additional buttons */}
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="operator" onClick={() => handleButtonClick('/')}>/</button>

        {/* Special buttons */}
        <button className="clear" onClick={handleClear}>C</button>
        <button className="backspace" onClick={handleBackspace}>←</button>
        <button className="equal" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
