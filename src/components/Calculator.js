import React from 'react';
import Item from './Item';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <div id="display" className="input-row">{0}</div>
        <Item label="AC" cl="light-gray" />
        <Item label="+/-" cl="light-gray" />
        <Item label="%" cl="light-gray" />
        <Item label="÷" cl="orange" />
        <Item label="7" cl="light-gray" />
        <Item label="8" cl="light-gray" />
        <Item label="9" cl="light-gray" />
        <Item label="x" cl="orange" />
        <Item label="4" cl="light-gray" />
        <Item label="5" cl="light-gray" />
        <Item label="6" cl="light-gray" />
        <Item label="-" cl="orange" />
        <Item label="1" cl="light-gray" />
        <Item label="2" cl="light-gray" />
        <Item label="3" cl="light-gray" />
        <Item label="+" cl="orange" />
        <Item label="0" cl="double light-gray" />
        <Item label="." cl="light-gray" />
        <Item label="=" cl="orange" />
      </div>
    );
  }
}

export default Calculator;
