import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import {Link} from 'react-router-dom';
import './ChatList.sass';
import PropTypes from 'prop-types';

export class ChatList extends Component {
  static propTypes = {
    chats: PropTypes.object,
    chatId: PropTypes.string,
  };

  renderRows = (chats) => {
    const {chatId} = this.props;
    const items = [];
    for (const [id, chat] of Object.entries(chats)) {
      const link = '/chat/' + id;
      const selected = (chatId === '' + id);
      items.push(
        <Link className='chat-link' to={link} key={id}>
          <ListItem button key={id} selected={selected}>
            <ListItemIcon><SendIcon/></ListItemIcon>
            <ListItemText primary={chat.name}/>
          </ListItem>
        </Link>,
      );
    }
    return items;
  };

  render() {
    return (
      <div className='chat-list'>
        <List component="nav" aria-label="main mailbox folders">
          {this.renderRows(this.props.chats)}
        </List>
      </div>
    );
  }
}
