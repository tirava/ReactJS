import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.sass';

export class Header extends Component {
  static propTypes = {
    chatname: PropTypes.string,
  };

  render() {
    return (
      <div className='header'>
        <h2>Наш супер-пупер чатик )</h2>
        <span className='chatname'>{this.props.chatname}</span>
      </div>
    );
  }
}
