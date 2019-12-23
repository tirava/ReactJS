export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (chatId, messageId, message) => ({
  type: SEND_MESSAGE,
  chatId,
  messageId,
  message,
});
