import React, {Component} from 'react';
import {MessagesList} from './MessagesList';
import {SendButton} from './SendButton';
import {SendMessage} from './SendMessage';

export class Messenger extends Component {
  state = {
    messages: [],
    name: 'Unknown',
    content: 'Hello',
  };

  handleNewMessage = () => {
    this.setState((prevState) => {
      return {
        messages: prevState.messages.concat([{
          id: prevState.messages.length,
          name: this.state.name,
          content: this.state.content,
        }]),
      };
    });
  };

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  handleContentChange = (event) => {
    this.setState({content: event.target.value});
  };

  // componentDidUpdate() {
  //   if (this.state.messages.length % 2 === 1) {
  //     setTimeout(() => this.setState(
  //         {messages: [...this.state.messages, 'I`m robot']}), 1000);
  //   }
  // }

  render() {
    return (
      <div className='messenger'>
        <MessagesList messages={this.state.messages}/>
        <SendMessage name={this.state.name}
                     content={this.state.content}
                     changeName={this.handleNameChange}
                     changeContent={this.handleContentChange}/>
        <SendButton click={this.handleNewMessage}/>
      </div>
    );
  }
}
