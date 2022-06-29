/* eslint-disable array-callback-return */
import React from 'react';
import buttons from './ButtonsKey';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
