import React, {Component} from 'react';
import {MessageList} from '../MessageList/MessageList';
import {MessengerForm} from '../MessengerForm/MessengerForm';
import PropTypes from 'prop-types';
import './Messenger.sass';

export class Messenger extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    addNewMessage: PropTypes.func.isRequired,
    chatId: PropTypes.string,
    chatName: PropTypes.string,
  };

  sendNewMessage = (message) => {
    this.props.addNewMessage(this.props.chatId, message);
  };

  render() {
    const {messages} = this.props;
    return (
      <div className='messenger'>
        <MessageList messages={messages}/>
        <MessengerForm onSendMessage={this.sendNewMessage}/>
      </div>
    );
  }
}
