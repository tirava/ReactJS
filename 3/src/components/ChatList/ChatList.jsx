import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './ChatList.sass';

export class ChatList extends Component {
  renderRow = () => {
    return (
      <ListItem button>
        <ListItemText primary='111'/>
      </ListItem>
    );
  };

  render() {
    return (
      <div className='chat-list'>
        <List component="nav" aria-label="main mailbox folders">
          {this.renderRow()}
        </List>
      </div>
    );
  }
}
