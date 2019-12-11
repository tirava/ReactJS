import React, {Component} from 'react';
import {MessagesList} from './MessagesList';
import {MessengerForm} from './MessengerForm';

export class Messenger extends Component {
  state = {
    messages: [
      {name: 'Клим', content: 'Всем привет!'},
      {name: 'Клим', content: 'Как дела?'},
    ],
    name: 'Unknown',
    content: 'Hello',
  };

  // handleNewMessage = () => {
  //   const name = this.state.name;
  //   const content = this.state.content;
  //   if (name === '' || content === '') {
  //     alert('Заполните все поля!');
  //     return false;
  //   }
  //   this.setState((prevState) => {
  //     return {
  //       messages: prevState.messages.concat([{
  //         id: prevState.messages.length,
  //         name: name,
  //         content: content,
  //       }]),
  //     };
  //   });
  // };

  sendNewMessage = (message) => {
    this.setState((prevState) => {
      return {
        messages: prevState.messages.concat([message]),
      };
    });
  };

  componentDidUpdate() {
    const messages = this.state.messages;
    const len = messages.length;
    if (len % 2 === 1) {
      setTimeout(() => this.setState({
        messages: [...messages,
          {
            name: 'Клим',
            content: messages[len - 1].name + ', не понял',
          }],
      }), 1000);
    }
  }

  render() {
    const {messages} = this.state;
    return (
      <div className='messenger'>
        <MessagesList messages={messages}/>
        <MessengerForm onSendMessage={this.sendNewMessage}/>
      </div>
    );
  }
}
