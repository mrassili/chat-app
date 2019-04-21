export const messages = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return state.concat({ text: action.message, id: action.id })
    default:
      return state
  }
}
