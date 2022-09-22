/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import ButtonItem from './ButtonItem';
import calculate from '../logic/calculate';

function Calculator() {
  const [object, setObject] = useState({
    total: null,
    operation: null,
    next: null,
  });

  const objetChangeEvent = (button) => {
    const newObject = calculate(object, button);
    setObject(newObject);
  };

  return (
    <div className="calculator-container">
      <h2>Let's do some math!</h2>
      <div className="calculator">
        <div id="display" className="input-row">{object.next || object.total || 0}</div>
        <ButtonItem label="AC" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="+/-" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="%" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="÷" cl="orange" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="7" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="8" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="9" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="x" cl="orange" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="4" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="5" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="6" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="-" cl="orange" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="1" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="2" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="3" cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="+" cl="orange" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="0" cl="double light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="." cl="light-gray" objetChangeEvent={objetChangeEvent} />
        <ButtonItem label="=" cl="orange" objetChangeEvent={objetChangeEvent} />
      </div>
    </div>
  );
}

export default Calculator;
