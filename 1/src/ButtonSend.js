import React from "react";
import ReactDOM from "react-dom";
import messages from "./messages"
import Messenger from "./Messenger";

const ButtonSend = function () {
    return (
        <button className="button" onClick={() => {
            const key = messages[messages.length - 1].id + 1;
            const user = "User " + Math.ceil(Math.random() * 10);
            messages.push({id: key, name: user, content: "Нормааально"});
            ReactDOM.render(<Messenger messages={messages}/>, document.getElementById("root"));
        }}>
            Отправить
        </button>
    )
};

export default ButtonSend;