import React, { useState } from 'react';
import './App.css'

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleButtonClick = (value) => {
      setInput((prevInput) => prevInput + value);
    };
  
    const clearInput = () => {
      setInput('');
      setResult('');
    };
  
    const calculateResult = () => {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    };

    return (
        <div className="calculator-container">
          <input
            type="text"
            value={input}
            className="calculator-input"
            readOnly
          />
          <div className="grid grid-cols-4 gap-2">
            <button className='span-two'>AC</button>
            <button className="calculator-button" onClick={() => handleButtonClick('DEL')}>DEL</button>
            <button className="calculator-button" onClick={() => handleButtonClick('÷')}>÷</button>
            <button className="calculator-button" onClick={() => handleButtonClick('1')}>1</button>
            <button className="calculator-button" onClick={() => handleButtonClick('2')}>2</button>
            <button className="calculator-button" onClick={() => handleButtonClick('3')}>3</button>
            <button className="calculator-button" onClick={() => handleButtonClick('*')}>*</button>
            <button className="calculator-button" onClick={() => handleButtonClick('4')}>4</button>
            <button className="calculator-button" onClick={() => handleButtonClick('5')}>5</button>
            <button className="calculator-button" onClick={() => handleButtonClick('6')}>6</button>
            <button className="calculator-button" onClick={() => handleButtonClick('+')}>+</button>
            <button className="calculator-button" onClick={() => handleButtonClick('7')}>7</button>
            <button className="calculator-button" onClick={() => handleButtonClick('8')}>8</button>
            <button className="calculator-button" onClick={() => handleButtonClick('9')}>9</button>
            <button className="calculator-button" onClick={() => handleButtonClick('-')}>-</button>
            <button className="calculator-button" onClick={() => handleButtonClick('.')}>.</button>
            <button className="calculator-button" onClick={() => handleButtonClick('0')}>0</button>
            <button className='span-two'>=</button>
            <div className="result">
                <p className="font-bold">Result: {result}</p>
            </div>
            
          </div>
          </div>
      )
}
export default Calculator;