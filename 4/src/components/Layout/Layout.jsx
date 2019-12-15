import React, {Component} from 'react';
import {Messenger} from '../Messenger/Messenger';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import PropTypes from 'prop-types';
import {formatDate} from '../utils';
import './Layout.sass';

export class Layout extends Component {
  state = {
    chats: {
      1: {
        name: '111 222', messages: [
          {
            name: 'Клим',
            content: 'Привет! Вы в чатике \"111 222\"',
            date: formatDate(),
          },
        ],
      },
      2: {
        name: '333 444', messages: [
          {
            name: 'Клим',
            content: 'Привет!Вы в чатике \"333 444\"',
            date: formatDate(),
          },
        ],
      },
    },
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  };

  addNewMessage = (chatId, message) => {
    this.setState((prevState) => {
      const chat = prevState.chats[chatId];
      chat.messages = chat.messages.concat([message]);
      return {chat};
    });
  };

  render() {
    const {chats} = this.state;
    let {id} = this.props.match.params;
    if (id === undefined || id > Object.keys(chats).length) {
      id = '1';
    }
    return (
      <div className='layout'>
        <Header chatName={chats[id].name}/>
        <div className='chat-mess'>
          <ChatList chats={chats}/>
          <Messenger chatId={id}
                     messages={chats[id].messages}
                     addNewMessage={this.addNewMessage}/>
        </div>
      </div>
    );
  }
}
