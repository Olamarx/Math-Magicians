/* eslint-disable array-callback-return */
import React from 'react';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const buttons = [
      'AC',
      '+/-',
      '%',
      '÷',
      7,
      8,
      9,
      'x',
      4,
      5,
      6,
      '-',
      1,
      2,
      3,
      '+',
      0,
      '.',
      '=',
    ];

    return (
      <div className="container-buttons">
        {buttons.map((button) => (
          <button className="button" type="button" key={button}>
            {button}
          </button>
        ))}
      </div>
    );
  }
}
