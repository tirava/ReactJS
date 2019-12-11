import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const messageType = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export class Message extends Component {
  static propTypes = messageType;

  render() {
    const {name, content} = this.props;
    return (
      <div className="user-item">
        <span className="user-name">{name}: </span>
        <span className="user-content">{content}</span>
      </div>
    );
  }
}
