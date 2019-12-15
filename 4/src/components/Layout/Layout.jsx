import React, {Component} from 'react';
import {Messenger} from '../Messenger/Messenger';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import PropTypes from 'prop-types';
import './Layout.sass';

export class Layout extends Component {
  state = {
    chats: {
      1: {
        name: '111 222', messages: [],
      },
      2: {
        name: '333 444', messages: [],
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

  static defaultProps = {
    id: 1,
  };

  // updateChatList = (chat) => {
  //   this.setState((prevState) => {
  //     return {
  //       chats: prevState.chats.concat([chat]),
  //     };
  //   });
  // };

  render() {
    const {chats} = this.state;
    let {id} = this.props.match.params;
    if (id === undefined || id > Object.keys(chats).length) {
      id = 1;
    }
    return (
      <div className='layout'>
        <Header chatName={chats[id].name}/>
        <div className='chat-mess'>
          <ChatList chats={chats}/>
          <Messenger chats={chats[id]}/>
        </div>
      </div>
    );
  }
}
