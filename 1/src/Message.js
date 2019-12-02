import React from "react";

const Message = ({name, content}) => <div>
    <span className="user-name">{name}: </span>
    <span className="user-content">{content}</span>
</div>;

export default Message;