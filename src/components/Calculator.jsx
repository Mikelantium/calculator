import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperator, setFirstOperator] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperator, setWaitingForSecondOperator] = useState(false);

  const handleNumberClick = (num) => {
    if (displayValue === "0" || waitingForSecondOperator) {
      setDisplayValue(String(num));
      setWaitingForSecondOperator(false);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (operator !== null) {
      calculate();
    }
    setFirstOperator(parseFloat(displayValue));
    setOperator(op);
    setWaitingForSecondOperator(true);
  };

  const calculate = () => {
    const secondOperator = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
      case "+":
        result = firstOperator + secondOperator;
        break;
      case "-":
        result = firstOperator - secondOperator;
        break;
      case "*":
        result = firstOperator * secondOperator;
        break;
      case "/":
        result = firstOperator / secondOperator;
        break;
      default:
        break;
    }
    setDisplayValue(result.toString());
    setFirstOperator(result);
    setWaitingForSecondOperator(false);
    setOperator(null);
  };

  const handleClear = () => {
    setDisplayValue("0");
    setFirstOperator(null);
    setOperator(null);
    setWaitingForSecondOperator(false);
  };

  const handleEquals = () => {
    calculate();
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="button-row">
        <Button onClick={handleClear}>C</Button>
        <Button onClick={() => handleNumberClick(0)}>
          0
        </Button>
        <Button onClick={() => handleOperatorClick("/")}>&divide;</Button>
        <Button onClick={() => handleOperatorClick("*")}>&times;</Button>
        <Button onClick={() => handleNumberClick(7)}>7</Button>
        <Button onClick={() => handleNumberClick(8)}>8</Button>
        <Button onClick={() => handleNumberClick(9)}>9</Button>
        <Button onClick={() => handleOperatorClick("-")}>-</Button>
        <Button onClick={() => handleNumberClick(4)}>4</Button>
        <Button onClick={() => handleNumberClick(5)}>5</Button>
        <Button onClick={() => handleNumberClick(6)}>6</Button>
        <Button onClick={() => handleOperatorClick("+")}>+</Button>
        <Button onClick={() => handleNumberClick(1)}>1</Button>
        <Button onClick={() => handleNumberClick(2)}>2</Button>
        <Button onClick={() => handleNumberClick(3)}>3</Button>
        <Button onClick={handleEquals}>=</Button>
        <Button onClick={() => handleNumberClick(".")}>.</Button>
      </div>
    </div>
  );
};

export default Calculator;
