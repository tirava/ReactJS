import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MessengerForm.sass';

export class MessengerForm extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired,
  };

  state = {
    author: '',
    content: '',
  };

  contentRef = React.createRef();

  componentDidMount() {
    this.contentRef.current.focus();
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleNewMessage = () => {
    this.props.onSendMessage({
      name: this.state.author,
      content: this.state.content,
    });
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.ctrlKey) {
      this.handleNewMessage();
    }
  };

  render() {
    const {author, content} = this.state;
    return (
      <div className='new-message'>
        <label>Ваше имя:
          <input className='author-input' required
                 name='author'
                 value={author}
                 onChange={(event) => this.handleInputChange(event)}/>
        </label>
        <label>Сообщение:
          <textarea className='message-area' cols='50' rows='5' required
                    ref={this.contentRef}
                    name='content'
                    value={content}
                    onChange={(event) => this.handleInputChange(event)}
                    onKeyDown={(event) => this.handleKeyDown(event)}
          />
        </label>
        <button className="button" onClick={this.handleNewMessage}>
          Отправить
        </button>
      </div>
    );
  }
}
