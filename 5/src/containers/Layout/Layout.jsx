import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Messenger} from '../../components/Messenger/Messenger';
import {Header} from '../../components/Header/Header';
import {ChatList} from '../../components/ChatList/ChatList';
import PropTypes from 'prop-types';
import {sendMessage} from '../../actions/messageActions';
import './Layout.sass';
import {addChat} from '../../actions/chatActions';
import {addProfile} from '../../actions/profileActions';

class Layout extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired,
    profiles: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
    addChat: PropTypes.func.isRequired,
    addProfile: PropTypes.func.isRequired,
  };

  sendMessage = (chatId, message) => {
    const {messages} = this.props;
    const {author, content, date} = message;
    const messageId = Object.keys(messages).length + 1;
    this.setState({
      messages: {
        ...messages,
        [messageId]: {
          author: author,
          content: content,
          date: date,
        },
      },
    });
    this.props.sendMessage(
      messageId,
      author,
      content,
      date,
      chatId,
    );
  };

  render() {
    const {chats, messages, profiles, addChat, addProfile} = this.props;
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
                     addNewMessage={this.sendMessage}/>
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
  bindActionCreators({sendMessage, addChat, addProfile},
    dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Layout);
