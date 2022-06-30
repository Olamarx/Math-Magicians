import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    [this.btn, this.id, this.clickEvent] = [props.btn, props.id, props.clickEvent];
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() {
    const { clickEvent } = this.props;
    clickEvent();
  }

  render() {
    return (
      <button
        className="button"
        type="button"
        onClick={this.clickEvent}
        key={this.id}
        id={this.id}
      >
        {this.btn}
      </button>
    );
  }
}

Buttons.propTypes = {
  btn: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
};
