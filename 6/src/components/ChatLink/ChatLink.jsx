import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import {Link} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

export const ChatLink = (props) => {
  const {id, title, chatId} = props;
  const link = '/chat/' + id;
  const selected = (chatId === '' + id);
  return (
    <Link className='chat-link' to={link} key={id}>
      <ListItem button key={id} selected={selected}>
        <ListItemIcon><SendIcon/></ListItemIcon>
        <ListItemText primary={title}/>
      </ListItem>
    </Link>
  );
};

ChatLink.propTypes = {
  id: PropTypes.string,
  chatId: PropTypes.string,
  title: PropTypes.string,
};
