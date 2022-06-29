import React from 'react';
import './App.css';
import Buttons from './Buttons';
import Upper from './Upper';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <div className="container">
          <Upper />
          <Buttons />
        </div>
      </div>
    );
  }
}
