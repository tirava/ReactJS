import {SEND_MESSAGE, sendMessage} from '../actions/messageActions';
import {botName} from '../utils/constants';
import {formatDate} from '../utils/utils';

export default (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE) {
    const {author} = action.message;
    if (author !== botName) {
      const chatName = store.getState().chatReducer.chats[action.chatId].title;
      const messageId = Object.keys(
        store.getState().messageReducer.messages).length + 1;
      setTimeout(() => store.dispatch(
        sendMessage(
          action.chatId, messageId,
          {
            author: botName,
            content: `${author}, не понял, здесь чат "${chatName}"`,
            date: formatDate(),
          },
        )), 1000);
    }
  }
  return next(action);
};
