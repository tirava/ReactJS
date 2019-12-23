import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';

class ChatLink extends Component {
  static propTypes = {
    id: PropTypes.string,
    chatId: PropTypes.string,
    title: PropTypes.string,
    push: PropTypes.func.isRequired,
  };

  render() {
    const {id, title, chatId} = this.props;
    const link = '/chat/' + id;
    const selected = (chatId === '' + id);
    return (
      <ListItem button key={id} selected={selected}
                onClick={() => this.props.push(link)}
      >
        <ListItemIcon><SendIcon/></ListItemIcon>
        <ListItemText primary={title}/>
      </ListItem>
    );
  }
}

const mapStateToProps = ({chatReducer}) => ({
  chats: chatReducer.chats,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators({push}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(ChatLink);
