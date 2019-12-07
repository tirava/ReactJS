import React from 'react';
import PropTypes from 'prop-types';

export const SendMessage = (props) => {
  return (
    <div>
      <input className='author-input' required
             name='name'
             value={props.name}
             onChange={(event) => props.change(event)}/>
      <textarea className='message-area' cols='30' rows='2' required
                name='content'
                value={props.content}
                onChange={(event) => props.change(event)}/>
    </div>
  );
};

SendMessage.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
