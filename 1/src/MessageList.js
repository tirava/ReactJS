import React from "react";
import Message from "./Message";
import messages from "./messages"

const MessageList = () => messages.map(item =>
    <Message
        name={item.name}
        content={item.content}
        key={item.id}
    />
);

export default MessageList;