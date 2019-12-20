export const ADD_CHAT = '@@chat/ADD_CHAT';
export const LOAD_CHATS = '@@chat/LOAD_CHAT';

export const addChat = (title) => ({
  type: ADD_CHAT,
  title,
});

export const loadChats = () => ({
  type: LOAD_CHATS,
});
