import * as types from "./ActionTypes"

let messageId = 0

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: messageId++,
  message,
  author,
})
