import React, { useState } from 'react';
import ButtonItem from './ButtonItem';
import Calculate from '../logic/calculate';

function Calculator() {
  const [object, setObject] = useState({
    total: null,
    operation: null,
    next: null,
  });

  const [display, setDisplay] = useState('');

  const objetChangeEvent = (button) => {
    const newObject = Calculate(object, button);
    setObject(newObject);

    if (button === '=') {
      setDisplay(newObject.total);
    } else if (button === 'AC') {
      setDisplay('');
    } else if (button === '+/-') {
      setDisplay('-');
    } else {
      setDisplay(display + button);
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="input-row">{display}</div>
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
  );
}

export default Calculator;
