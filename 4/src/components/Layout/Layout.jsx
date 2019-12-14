import React, {Component} from 'react';
import {Messenger} from '../Messenger/Messenger';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import PropTypes from 'prop-types';
import './Layout.sass';

export class Layout extends Component {
  state = {
    chats: [],
  };

  static propTypes = {
    chatname: PropTypes.string,
  };

  updateChatListData = (chat) => {
    this.setState((prevState) => {
      return {
        chats: prevState.chats.concat([chat]),
      };
    });
  };

  render() {
    return (
      <div className='layout'>
        <Header chatname={this.props.chatname || 'Anonymous'}/>
        <div className='chat-mess'>
          <ChatList chats={this.state.chats}/>
          <Messenger updateChatListData={this.updateChatListData}/>
        </div>
      </div>
    );
  }
}
