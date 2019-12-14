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
    chats: PropTypes.array,
  };

  renderRows = (chats) => {
    const uniqChats = new Set([]);
    chats.forEach((chat) => {
        if (chat === '') {
          chat = 'Anonymous';
        }
        uniqChats.add(chat);
      },
    );

    const items = [];
    uniqChats.forEach((item, index) => {
        const link = '/chat/' + item;
        items.push(
          <Link className='chat-link' to={link} key={index}>
            <ListItem button key={index}
                      onClick={(event) => this.handleChatClick(event)}>
              <ListItemIcon><SendIcon/></ListItemIcon>
              <ListItemText primary={item}/>
            </ListItem>
          </Link>,
        );
      },
    );
    return items;
  };

  handleChatClick = () => {
    // console.log(event.target);
    // event.target.selected = true;
    // alert('TODO: chat for ' + event.target.innerText);
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
