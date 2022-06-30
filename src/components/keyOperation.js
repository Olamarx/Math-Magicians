/* eslint-disable react/no-typos */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Buttons from './Buttons';
import buttons from './ButtonsKey';

export default class KeyOperation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { clickEvent } = this.props;
    return (
      <div className="container-buttons">
        {
                buttons.map((button) => (
                  <Buttons
                    key={`${button.id}`}
                    btn={button.btn}
                    id={button.id}
                    clickEvent={clickEvent}
                  />
                ))
            }
      </div>
    );
  }
}

KeyOperation.propTypes = {
  clickEvent: PropTypes.func.isRequired,
};
