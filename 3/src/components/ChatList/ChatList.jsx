import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './ChatList.sass';
import PropTypes from 'prop-types';

export class ChatList extends Component {
  static propTypes = {
    chats: PropTypes.array,
  };

  renderRows = (chats) => {
    let items = '';
    chats.forEach((item, index) => {
        items +=
          <ListItem button>
            <ListItemText primary={item} key={index}/>
          </ListItem>;
        // console.log(<ListItemText primary={chats[index]} key={index}/>);
        console.log(item, index);
      },
    );
    console.log(items);
    return items;
    // return (
    //   <ListItem button>
    //     <ListItemText primary={chats[index]} key={index}/>
    //   </ListItem>
    // );
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
