import React from 'react';
import Calculator from './Calculator';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}
