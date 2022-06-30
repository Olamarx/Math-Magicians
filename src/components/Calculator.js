import React, { useState } from 'react';
import './App.css';
import KeyOperation from './keyOperation';
import Upper from './Upper';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [stateObject, setStateObject] = useState({ total: 0, operation: null, next: null });

  const clickEvent = (e) => {
    setStateObject((state) => {
      const result = calculate(state, e.target.textContent);
      return result;
    });
  };

  const { next, operation } = stateObject;
  let { total } = stateObject;
  total = total === null && (!next) ? '' : total;

  return (
    <div className="main-container">
      <div className="container">
        <Upper
          operation={operation || ''}
          total={total === null ? 0 : total}
          next={next || ''}
        />
        <KeyOperation
          clickEvent={clickEvent}
        />
      </div>
    </div>
  );
};

export default Calculator;
