import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
import connect from 'react-redux/es/connect/connect';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import {Link} from 'react-router-dom';
import './ChatList.sass';
import PropTypes from 'prop-types';
import {ChatForm} from '../ChatForm/ChatForm';
import {animateScroll} from 'react-scroll';
import {addChat} from '../../actions/chatActions';

class ChatList extends Component {
  static propTypes = {
    chats: PropTypes.object.isRequired,
    // chatId: PropTypes.string,
    addChat: PropTypes.func.isRequired,
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
    // const {chatId} = this.props;
    const items = [];
    for (const [id, chat] of Object.entries(chats)) {
      const link = '/chat/' + id;
      // const selected = (chatId === '' + id);
      const selected = false;
      items.push(
        <Link className='chat-link' to={link} key={id}>
          <ListItem button key={id} selected={selected}>
            <ListItemIcon><SendIcon/></ListItemIcon>
            <ListItemText primary={chat.title}/>
          </ListItem>
        </Link>,
      );
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
        <ChatForm onSendChat={this.props.addChat}/>
      </div>
    );
  }
}

const mapStateToProps = ({chatReducer}) => ({
  chats: chatReducer.chats,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({addChat}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(ChatList);
