import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Message.sass';

export const messageType = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export class Message extends Component {
  static propTypes = messageType;

  render() {
    const {name, content} = this.props;
    return (
      <div className="user-item"
           style={{
             alignSelf: name === 'Клим' ?
               'flex-start' : 'flex-end',
           }}
      >
        <span className="user-content">{content}</span>
        <span className="user-name">{name || 'Anonymous'}</span>
      </div>
    );
  }
}
