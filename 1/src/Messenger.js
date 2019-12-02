import MessageList from "./MessageList";
import messages from "./messages";
import Button from "./Button";
import React from "react";
import ReactDOM from "react-dom";

const Messenger = () =>
    <div className="messenger">
        <MessageList messages={messages}/>
        <Button/>
    </div>;

ReactDOM.render(<Messenger messages={messages}/>, document.getElementById("root"));

export default Messenger;
