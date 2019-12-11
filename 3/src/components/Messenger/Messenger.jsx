import React, {Component} from 'react';
import {MessageList} from '../MessageList/MessageList';
import {MessengerForm} from '../MessengerForm/MessengerForm';
import './Messenger.sass';

export class Messenger extends Component {
  state = {
    messages: [
      {name: 'Клим', content: 'Всем привет!'},
      {name: 'Клим', content: 'Как дела?'},
    ],
  };

  sendNewMessage = (message) => {
    this.setState((prevState) => {
      return {
        messages: prevState.messages.concat([message]),
      };
    });
  };

  componentDidUpdate() {
    const name = this.state.messages[this.state.messages.length - 1].name;
    if (name !== 'Клим') {
      setTimeout(() =>
        this.sendNewMessage({
          name: 'Клим',
          content: name + ', не понял',
        }), 1000);
    }
  }

  render() {
    const {messages} = this.state;
    return (
      <div className='messenger'>
        <MessageList messages={messages}/>
        <MessengerForm onSendMessage={this.sendNewMessage}/>
      </div>
    );
  }
}
