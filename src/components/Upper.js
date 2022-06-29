import React from 'react';

export default class Upper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="upper">
        {' '}
        <input className="input" type="number" readOnly />
      </div>
    );
  }
}
