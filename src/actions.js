import types from "./constants/ActionTypes"

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: 2,
  message,
  author,
})
