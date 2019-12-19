import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Messenger from '../Messenger/Messenger';
import {Header} from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import PropTypes from 'prop-types';
import {formatDate} from '../../utils/utils';
import {sendMessage} from '../../actions/messageActions';
import './Layout.sass';

class Layout extends Component {
  state = {
    messages: {
      1: {
        author: 'Клим',
        content: 'Привет!',
        date: formatDate(),
      },
      2: {
        author: 'Клим',
        content: 'Вы в чатике \"Урок №1\"',
        date: formatDate(),
      },
      3: {
        author: 'Клим',
        content: 'Привет!',
        date: formatDate(),
      },
      4: {
        author: 'Клим',
        content: 'Вы в чатике \"Урок №2\"',
        date: formatDate(),
      },
      5: {
        author: 'Клим',
        content: 'Приветик! Вы в чатике \"Урок №3\"',
        date: formatDate(),
      },
    },
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
  };

  // sendMessage = (chatId, message) => {
  //   this.setState((prevState) => {
  //     const {chats, messages} = prevState;
  //     const messageId = Object.keys(messages).length + 1;
  //     return {
  //       chats: {
  //         ...chats,
  //         [chatId]: {
  //           ...chats[chatId],
  //           messageList: [...chats[chatId]['messageList'], messageId],
  //         },
  //       },
  //       messages: {
  //         ...messages,
  //         [messageId]: {
  //           author: message.author,
  //           content: message.content,
  //           date: message.date,
  //         },
  //       },
  //     };
  //   });
  // };

  sendMessage = (message, author) => {
    const {chatId} = this.props;
    const {messages} = this.state;
    const messageId = Object.keys(messages).length + 1;
    this.setState({
      messages: {
        ...messages,
        [messageId]: {
          author: message.author,
          content: message.content,
          date: message.date,
        },
      },
    });
    this.props.sendMessage(messageId, message.content, author, chatId);
  };

  // addNewChat = (title) => {
  //   this.setState((prevState) => {
  //     const {chats, messages} = prevState;
  //     for (const chat of Object.entries(chats)) {
  //       if (chat[1].title === title || title === '') {
  //         alert('Недопустимое имя чата!');
  //         return null;
  //       }
  //     }
  //     const chatId = Object.keys(chats).length + 1;
  //     const messageId = Object.keys(messages).length + 1;
  //     return {
  // eslint-disable-next-line max-len
  //       chats: {...chats, [chatId]: {title: title, messageList: [messageId]}},
  //       messages: {
  //         ...messages,
  //         [messageId]: {
  //           author: 'Клим',
  //           content: `Привет! Вы в чатике \"${title}\"`,
  //           date: formatDate(),
  //         },
  //       },
  //     };
  //   });
  // };

  render() {
    const {messages} = this.state;
    const {chats} = this.props;
    let {id} = this.props.match.params;
    if (id === undefined || id > Object.keys(chats).length) {
      id = '1';
    }

    const chatMessages = chats[id].messageList.map((messageId) => (
      messages[messageId]
    ));

    return (
      <div className='layout'>
        <Header chatId={id} chatName={chats[id].title}/>
        <div className='chat-mess'>
          <ChatList chatId={id}/>
          <Messenger chatId={id} chatName={chats[id].title}
                     messages={chatMessages}
                     addNewMessage={this.sendMessage}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({chatReducer}) => ({
  chats: chatReducer.chats,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({sendMessage}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Layout);
