import React, { useState } from 'react';
import Item from './Item';
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
    } else {
      setDisplay(display + button);
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="input-row">{display}</div>
      <Item label="AC" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="+/-" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="%" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="÷" cl="orange" objetChangeEvent={objetChangeEvent} />
      <Item label="7" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="8" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="9" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="x" cl="orange" objetChangeEvent={objetChangeEvent} />
      <Item label="4" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="5" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="6" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="-" cl="orange" objetChangeEvent={objetChangeEvent} />
      <Item label="1" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="2" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="3" cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="+" cl="orange" objetChangeEvent={objetChangeEvent} />
      <Item label="0" cl="double light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="." cl="light-gray" objetChangeEvent={objetChangeEvent} />
      <Item label="=" cl="orange" objetChangeEvent={objetChangeEvent} />
    </div>
  );
}

export default Calculator;
