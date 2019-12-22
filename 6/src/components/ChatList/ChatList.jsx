import React, {Component} from 'react';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import SendIcon from '@material-ui/icons/Send';
// import {Link} from 'react-router-dom';
import './ChatList.sass';
import PropTypes from 'prop-types';
import {ChatForm} from '../../components/ChatForm/ChatForm';
import {ChatLink} from '../../components/ChatLink/ChatLink';
import {animateScroll} from 'react-scroll';

export class ChatList extends Component {
  static propTypes = {
    chats: PropTypes.object.isRequired,
    chatId: PropTypes.string,
    addChat: PropTypes.func.isRequired,
    addProfile: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: 'chat-list',
    });
  }

  renderRows = (chats) => {
    const {chatId} = this.props;
    const items = [];
    for (const [id, chat] of Object.entries(chats)) {
      items.push(
        <ChatLink
          chatId={chatId}
          title={chat.title}
          key={id} id={id}
        />);
    }
    return items;
  };

  render() {
    return (
      <div className='chat-list-form'>
        <div className='chat-list' id='chat-list'>
          <List component="nav" aria-label="main mailbox folders">
            {this.renderRows(this.props.chats)}
          </List>
        </div>
        <ChatForm onSendChat={this.props.addChat}
                  onSendProfile={this.props.addProfile}
        />
      </div>
    );
  }
}
