import React, {Component} from 'react';
import {Message, messageType} from './Message';
import PropTypes from 'prop-types';

export class MessagesList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape(messageType),
    ),
  };

  render() {
    return (
      this.props.messages.map((item, index) =>
        <Message {...item} key={index}/>,
      )
    );
  }
}
