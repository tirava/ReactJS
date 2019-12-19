export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const addChat = (messageId, author, content, date, chatId) => ({
  type: SEND_MESSAGE,
  messageId,
  author,
  content,
  date,
  chatId,
});
