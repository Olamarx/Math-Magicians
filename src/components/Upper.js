import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Upper extends Component {
  constructor(props) {
    super(props);
    [this.total] = [props.total];
  }

  render() {
    const { total, operation, next } = this.props;
    return (
      <div className="upper">
        <span className="input">
          {`${total} ${operation} ${next}`}
        </span>
      </div>
    );
  }
}

Upper.propTypes = {
  total: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};
