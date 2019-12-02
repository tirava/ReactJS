import MessageList from "./MessageList";
import messages from "./messages";
import ButtonSend from "./ButtonSend";
import React from "react";
import ReactDOM from "react-dom";

const Messenger = () =>
    <div className="messenger">
        <MessageList messages={messages}/>
        <ButtonSend/>
    </div>;

ReactDOM.render(<Messenger messages={messages}/>, document.getElementById("root"));

export default Messenger;
