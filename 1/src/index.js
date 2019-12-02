import React from "react";
import ReactDOM from "react-dom";

const messages = [
    {id: 0, name: "111", content: "222"},
    {id: 1, name: "333", content: "444"},
    {id: 2, name: "555", content: "666"},
];

const Message = (props) => <div><b>{props.name}</b>: {props.content}</div>;
const MessageList = function (props) {
    return props.messages.map(
        item => <Message name={item.name} content={item.content} key={item.id}/>);
};

ReactDOM.render(<MessageList messages={messages}/>, document.getElementById("root"));