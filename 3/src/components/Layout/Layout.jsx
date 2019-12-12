import React, {Component} from 'react';
import {Messenger} from '../Messenger/Messenger';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import './Layout.sass';

export class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header/>
        <div className='chat-mess'>
          <ChatList/>
          <Messenger/>
        </div>
      </div>
    );
  }
}
