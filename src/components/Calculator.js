import React, { Component } from 'react';
import './App.css';
import KeyOperation from './keyOperation';
import Upper from './Upper';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
    this.state = {
      total: 0,
      operation: null,
      next: null,
    };
  }

  clickEvent(e) {
    this.setState((state) => {
      const result = calculate(state, e.target.textContent);
      return result;
    });
  }

  render() {
    const { next, operation } = this.state;
    let { total } = this.state;
    total = total === null && next ? '' : total;
    return (
      <div className="main-container">
        <div className="container">
          <Upper
            operation={operation || ''}
            total={total === null ? 0 : total}
            next={next || ''}
          />
          <KeyOperation
            clickEvent={this.clickEvent}
          />
        </div>
      </div>
    );
  }
}
