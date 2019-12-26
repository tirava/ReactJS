import update from 'react-addons-update';
import {
  ADD_PROFILE,
  START_PROFILES_LOADING,
  SUCCESS_PROFILES_LOADING,
  ERROR_PROFILES_LOADING,
} from '../actions/profileActions';
import {DELETE_CHAT} from '../actions/chatActions';
import {getNullCountObject} from '../utils/utils';

const initialStore = {
  profiles: {
    // 1: {title: 'Урок №1', description: 'Введение в JavaScript'},
    // 2: {title: 'Урок №2', description: 'Погружение в React'},
    // 3: {title: 'Урок №3', description: 'Изучаем Redux'},
  },
  isLoadingProfiles: false,
};

export default function profileReducer(store = initialStore, action) {
  switch (action.type) {
    case ADD_PROFILE: {
      const profileId = parseInt(Object.keys(store.profiles).pop()) + 1;
      return update(store, {
        profiles: {
          $merge: {
            [profileId]: {
              title: action.title,
              description: action.description,
            },
          },
        },
      });
    }
    case DELETE_CHAT: {
      if (Object.keys(store.profiles).length - 1 ===
        getNullCountObject(store.profiles)) {
        return store;
      }
      return update(store, {
        profiles: {
          $merge: {
            [action.chatId]: null,
          },
        },
      });
    }
    case START_PROFILES_LOADING: {
      return update(store, {
        isLoadingProfiles: {
          $set: true,
        },
      });
    }
    case SUCCESS_PROFILES_LOADING: {
      const profiles = {};
      action.payload.forEach((msg) => {
        const {chatId, title, description} = msg;
        profiles[chatId] = {title, description};
      });
      return update(store, {
        profiles: {
          $set: profiles,
        },
        isLoadingProfiles: {
          $set: false,
        },
      });
    }
    case ERROR_PROFILES_LOADING: {
      return update(store, {
        isLoadingProfiles: {
          $set: false,
        },
      });
    }
    default:
      return store;
  }
}
