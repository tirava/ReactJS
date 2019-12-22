import React, {Component} from 'react';
import {MessageList} from '../MessageList/MessageList';
import {MessengerForm} from '../MessengerForm/MessengerForm';
import PropTypes from 'prop-types';
import './Messenger.sass';

export class Messenger extends Component {
  // state = {
  //   chatId: '1',
  //   lenMessages: 0,
  // };

  static propTypes = {
    messages: PropTypes.array.isRequired,
    addNewMessage: PropTypes.func.isRequired,
    chatId: PropTypes.string,
    chatName: PropTypes.string,
  };

  // botTimers = [];

  // clearBots = () => {
  //   this.botTimers.forEach((timer) => clearTimeout(timer));
  //   this.botTimers = [];
  // };

  sendNewMessage = (message) => {
    // this.clearBots();
    this.props.addNewMessage(this.props.chatId, message);
  };

  // componentDidUpdate() {
  //   const {chatId, chatName, messages} = this.props;
  //   const len = messages.length;
  //   if (len === 0 || len === this.state.lenMessages) {
  //     return;
  //   }
  //
  //   if (this.state.chatId !== chatId) {
  //     this.clearBots();
  //   }
  //   this.setState((prevState) => {
  //     prevState.chatId = chatId;
  //     prevState.lenMessages = len;
  //   });
  //
  //   const name = messages[len - 1].author;
  //   if (name !== botName) {
  //     this.botTimers.push(
  //       setTimeout(() =>
  //         this.sendNewMessage({
  //           author: botName,
  //           content: `${name}, не понял, здесь чат "${chatName}"`,
  //           date: formatDate(),
  //         }), 1000),
  //     );
  //   }
  // }

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
