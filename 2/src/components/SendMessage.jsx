import React from 'react';
import PropTypes from 'prop-types';

export const SendMessage = (props) => {
  return (
    <div>
      <input className='author-input'
             value={props.name} required
             onChange={(event) => props.changeName(event)}/>
      <textarea className='message-area' cols='30' rows='2'
                value={props.content}
                onChange={(event) => props.changeContent(event)}/>
    </div>
  );
};

SendMessage.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
  changeContent: PropTypes.func.isRequired,
};
