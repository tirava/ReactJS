import React, {Component} from 'react';
import {MessageList} from '../MessageList/MessageList';
import {MessengerForm} from '../MessengerForm/MessengerForm';
import './Messenger.sass';
// import PropTypes from 'prop-types';

export class Messenger extends Component {
  formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString() + '  ' + date.toLocaleTimeString();
  };

  state = {
    messages: [
      // {name: 'Клим', content: 'Всем привет!', date: this.formatDate()},
      // {name: 'Клим', content: 'Как дела?', date: this.formatDate()},
    ],
  };

  // static propTypes = {
  //   updateChatList: PropTypes.func.isRequired,
  // };

  sendNewMessage = (message) => {
    this.setState((prevState) => {
      return {
        messages: prevState.messages.concat([message]),
        // messages: [message].concat(...prevState.messages),
      };
    });
    // this.props.updateChatListData(message.name);
  };

  componentDidUpdate() {
    const len = this.state.messages.length;
    if (len === 0) {
      return;
    }
    const name = this.state.messages[len - 1].name;
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
    const {messages} = this.state;
    return (
      <div className='messenger'>
        <MessageList messages={messages}/>
        <MessengerForm onSendMessage={this.sendNewMessage}/>
      </div>
    );
  }
}
