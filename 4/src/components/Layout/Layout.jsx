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
        name: 'Урок №1', messages: [
          {
            name: 'Клим',
            content: 'Привет! Вы в чатике \"Урок №1\"',
            date: formatDate(),
          },
        ],
      },
      2: {
        name: 'Урок №2', messages: [
          {
            name: 'Клим',
            content: 'Привет!Вы в чатике \"Урок №2\"',
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

  addNewChat = (name) => {
    this.setState((prevState) => {
      const chats = prevState.chats;
      for (const chat of Object.entries(chats)) {
        if (chat[1].name === name || name === '') {
          alert('Недопустимое имя чата!');
          return null;
        }
      }
      chats[Object.keys(chats).length + 1] = {
        name: name,
        messages: [
          {
            name: 'Клим',
            content: `Привет! Вы в чатике \"${name}\"`,
            date: formatDate(),
          }],
      };
      return {chats};
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
        <Header chatId={id} chatName={chats[id].name}/>
        <div className='chat-mess'>
          <ChatList chatId={id} chats={chats}
                    addNewChat={this.addNewChat}/>
          <Messenger chatId={id} chatName={chats[id].name}
                     messages={chats[id].messages}
                     addNewMessage={this.addNewMessage}/>
        </div>
      </div>
    );
  }
}