import update from 'react-addons-update';
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  START_MESSAGES_LOADING,
  SUCCESS_MESSAGES_LOADING,
  ERROR_MESSAGES_LOADING,
} from '../actions/messageActions';

const initialStore = {
  messages: {},
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
