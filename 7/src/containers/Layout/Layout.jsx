import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Messenger} from '../../components/Messenger/Messenger';
import {Header} from '../../components/Header/Header';
import {ChatList} from '../../components/ChatList/ChatList';
import PropTypes from 'prop-types';
import './Layout.sass';
import {sendMessage, loadMessages} from '../../actions/messageActions';
import {addChat} from '../../actions/chatActions';
import {addProfile} from '../../actions/profileActions';
import CircularProgress from '@material-ui/core/CircularProgress';

class Layout extends Component {
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    profiles: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
    loadMessages: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    addChat: PropTypes.func.isRequired,
    addProfile: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadMessages();
  }

  sendMessage = (chatId, message) => {
    const {messages} = this.props;
    const lastMessageId = Object.keys(messages).pop();
    const messageId = parseInt(lastMessageId) + 1;
    this.props.sendMessage(
      chatId,
      messageId,
      message,
    );
  };

  render() {
    const {chats, messages, profiles, addChat, addProfile} = this.props;

    if (this.props.isLoading) {
      return <CircularProgress/>;
    }

    if (Object.keys(messages).length === 0) {
      return (
        <div>
          Нет ни одного сообщения!
        </div>
      );
    }

    // if (Object.keys(profiles).length === 0) {
    //   alert('Нет ни одного профиля!');
    // }
    //
    // if (Object.keys(messages).length === 0) {
    //   fetch('/api/messages.json').then((body) =>
    //     body.json()).then((json) => {
    //     json.forEach((msg) => {
    //       this.props.sendMessage(msg.chatId, msg.id, {
    //         author: msg.author,
    //         content: msg.content,
    //         date: msg.date,
    //       });
    //     });
    //   });
    // }

    // eslint-disable-next-line react/prop-types
    let {id} = this.props.match.params;
    if (chats[id] === null || chats[id] === undefined) {
      for (const [i] of Object.entries(chats)) {
        if (chats[i] !== null) {
          id = i;
          break;
        }
      }
    }

    return (
      <div className='layout'>
        {/*<Header chatId={id} profiles={profiles}/>*/}
        <div className='chat-mess'>
          <ChatList chatId={id} chats={chats}
                    addChat={addChat} addProfile={addProfile}
          />
          <Messenger chatId={id} chatName={chats[id].title}
                     messages={messages} chats={chats}
                     addNewMessage={this.sendMessage}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({chatReducer, messageReducer, profileReducer}) => ({
  chats: chatReducer.chats,
  messages: messageReducer.messages,
  profiles: profileReducer.profiles,
  isLoading: messageReducer.isLoading,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({
    sendMessage, loadMessages, addChat, addProfile,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Layout);
