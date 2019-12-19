export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (messageId, author, content, date, chatId) => ({
  type: SEND_MESSAGE,
  // payload: {
  //   messageId,
  //   author,
  //   content,
  //   date,
  //   chatId,
  // },
  messageId,
  author,
  content,
  date,
  chatId,
});
