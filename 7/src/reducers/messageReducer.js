import update from 'react-addons-update';
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  START_MESSAGES_LOADING,
  SUCCESS_MESSAGES_LOADING,
  ERROR_MESSAGES_LOADING,
} from '../actions/messageActions';

const initialStore = {
  messages: {
    // 1: {
    //   author: botName,
    //   content: 'Привет!',
    //   date: formatDate(),
    // },
    // 2: {
    //   author: botName,
    //   content: 'Вы в чатике \"Урок №1\"',
    //   date: formatDate(),
    // },
    // 3: {
    //   author: botName,
    //   content: 'Привет!',
    //   date: formatDate(),
    // },
    // 4: {
    //   author: botName,
    //   content: 'Вы в чатике \"Урок №2\"',
    //   date: formatDate(),
    // },
    // 5: {
    //   author: botName,
    //   content: 'Приветик! Вы в чатике \"Урок №3\"',
    //   date: formatDate(),
    // },
  },
  isLoadingMessages: false,
};

export default function messageReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const message = action.message;
      return update(store, {
        messages: {
          $merge: {
            [action.messageId]: {
              author: message.author,
              content: message.content,
              date: message.date,
            },
          },
        },
      });
    }
    case DELETE_MESSAGE: {
      return update(store, {
        messages: {
          $merge: {
            [action.messageId]: null,
          },
        },
      });
    }
    case START_MESSAGES_LOADING: {
      return update(store, {
        isLoadingMessages: {
          $set: true,
        },
      });
    }
    case SUCCESS_MESSAGES_LOADING: {
      const messages = {};
      action.payload.forEach((msg) => {
        const {id, author, content, date} = msg;
        messages[id] = {author, content, date};
      });
      return update(store, {
        messages: {
          $set: messages,
        },
        isLoadingMessages: {
          $set: false,
        },
      });
    }
    case ERROR_MESSAGES_LOADING: {
      return update(store, {
        isLoadingMessages: {
          $set: false,
        },
      });
    }
    default:
      return store;
  }
}
