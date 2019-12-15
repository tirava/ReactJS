import React, {Component} from 'react';
import {MessageList} from '../MessageList/MessageList';
import {MessengerForm} from '../MessengerForm/MessengerForm';
import './Messenger.sass';
import PropTypes from 'prop-types';

export class Messenger extends Component {
  formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString() + '  ' + date.toLocaleTimeString();
  };

  static propTypes = {
    messages: PropTypes.array.isRequired,
    addNewMessage: PropTypes.func.isRequired,
    chatId: PropTypes.string,
  };

  sendNewMessage = (message) => {
    const {chatId} = this.props;
    this.props.addNewMessage(chatId, message);
  };

  componentDidUpdate() {
    const {messages} = this.props;
    const len = messages.length;
    if (len === 0) {
      return;
    }
    const name = messages[len - 1].name;
    if (name !== 'Клим') {
      setTimeout(() =>
        this.sendNewMessage({
          name: 'Клим',
          content: name + ', не понял',
          date: this.formatDate(),
        }), 1000);
    }
  }

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
