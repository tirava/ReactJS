import React from 'react';
import PropTypes from 'prop-types';

export const SendButton = (props) => (
  <button className="button" onClick={props.click}>
    Отправить old
  </button>
);

SendButton.propTypes = {
  click: PropTypes.func.isRequired,
};
