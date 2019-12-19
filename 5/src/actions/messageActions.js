export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (messageId, author, content, date, chatId) => ({
  type: SEND_MESSAGE,
  messageId,
  author,
  content,
  date,
  chatId,
});
