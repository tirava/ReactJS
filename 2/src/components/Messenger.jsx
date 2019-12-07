import React, {Component} from 'react';
import {MessagesList} from './MessagesList';
import {SendButton} from './SendButton';

export class Messenger extends Component {
  state = {
    messages: [
      {id: 0, name: 'Клим', content: 'Всем привет, как дела?'},
    ],
  };

  handleNewMessage = () => {
    this.setState((prevState) => {
      return {
        messages: prevState.messages.concat([{
          id: prevState.messages.length,
          name: 'Robot',
          content: 'Hello from robot',
        }]),
      };
    });
  };

  render() {
    return (
      <div className='messenger'>
        <MessagesList messages={this.state.messages}/>
        <input type="text" className='author-input'/>
        <textarea className='message-area' cols='30' rows='2'/>
        <br/>
        <SendButton click={this.handleNewMessage}/>
      </div>
    );
  }
}
