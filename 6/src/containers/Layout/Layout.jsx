import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Messenger} from '../../components/Messenger/Messenger';
import {Header} from '../../components/Header/Header';
import {ChatList} from '../../components/ChatList/ChatList';
import PropTypes from 'prop-types';
import './Layout.sass';
import {sendMessage} from '../../actions/messageActions';
import {addChat} from '../../actions/chatActions';
import {addProfile} from '../../actions/profileActions';

class Layout extends Component {
  static propTypes = {
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
    const messageId = Object.keys(messages).length + 1;
    this.props.sendMessage(
      chatId,
      messageId,
      message,
    );
  };

  render() {
    const {chats, messages, profiles, addChat, addProfile} = this.props;

    // eslint-disable-next-line react/prop-types
    let {id} = this.props.match.params;
    if (id === undefined || id > Object.keys(chats).length) {
      id = '1';
    }

    return (
      <div className='layout'>
        <Header chatId={id} profiles={profiles}/>
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
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({
    sendMessage, addChat, addProfile,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Layout);
