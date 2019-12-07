import React from 'react';
import Prop from 'prop-types';

const Message = ({name, content}) =>
  <div className="user-item">
    <span className="user-name">{name}: </span>
    <span className="user-content">{content}</span>
  </div>;

Message.propTypes = {
  name: Prop.string,
  content: Prop.string,
};

export default Message;
