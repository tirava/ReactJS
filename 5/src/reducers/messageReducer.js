import update from 'react-addons-update';
import {SEND_MESSAGE} from '../actions/messageActions';
import {formatDate} from '../utils/utils';

const initialStore = {
  messages: {
    1: {
      author: 'Клим',
      content: 'Привет!',
      date: formatDate(),
    },
    2: {
      author: 'Клим',
      content: 'Вы в чатике \"Урок №1\"',
      date: formatDate(),
    },
    3: {
      author: 'Клим',
      content: 'Привет!',
      date: formatDate(),
    },
    4: {
      author: 'Клим',
      content: 'Вы в чатике \"Урок №2\"',
      date: formatDate(),
    },
    5: {
      author: 'Клим',
      content: 'Приветик! Вы в чатике \"Урок №3\"',
      date: formatDate(),
    },
  },
};

export default function messageReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      return update(store, {
        messages: {
          $merge: {
            [action.messageId]: {
              author: action.author,
              content: action.content,
              date: action.date,
            },
          },
        },
      });
    }
    default:
      return store;
  }
}

