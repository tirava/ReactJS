import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Messenger} from '../../components/Messenger/Messenger';
import {Header} from '../../components/Header/Header';
import {ChatList} from '../../components/ChatList/ChatList';
import PropTypes from 'prop-types';
import './Layout.sass';
import {loadMessages, sendMessage} from '../../actions/messageActions';
import {loadChats, addChat} from '../../actions/chatActions';
import {loadProfiles, addProfile} from '../../actions/profileActions';

class Layout extends Component {
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    profiles: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
    addChat: PropTypes.func.isRequired,
    addProfile: PropTypes.func.isRequired,
    loadChats: PropTypes.func.isRequired,
    loadMessages: PropTypes.func.isRequired,
    loadProfiles: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadChats();
    this.props.loadMessages();
    this.props.loadProfiles();
  }

  sendMessage = (chatId, message) => {
    const {messages} = this.props;
    const messageId = Object.keys(messages).length + 1;
    this.props.sendMessage(
      chatId,
      messageId,
      message,
    );
  };

  render() {
    const {chats, messages, profiles, addChat, addProfile} = this.props;

    // this block need for bypass first render when items loading from DB
    // because: render (no chats and others) -> reducer (load) -> render
    // may be didmount is wrong
    if (Object.keys(chats).length === 0 ||
      Object.keys(messages).length === 0 ||
      Object.keys(profiles).length === 0) {
      return null;
    }

    // eslint-disable-next-line react/prop-types
    let {id} = this.props.match.params;
    if (id === undefined || id > Object.keys(chats).length) {
      id = '1';
    }

    const chatMessages = chats[id].messageList.map((messageId) => (
      messages[messageId]
    ));

    return (
      <div className='layout'>
        <Header chatId={id} profiles={profiles}/>
        <div className='chat-mess'>
          <ChatList chatId={id} chats={chats}
                    addChat={addChat} addProfile={addProfile}
          />
          <Messenger chatId={id} chatName={chats[id].title}
                     messages={chatMessages}
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
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({
    loadChats, loadMessages, loadProfiles,
    sendMessage, addChat, addProfile,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Layout);
