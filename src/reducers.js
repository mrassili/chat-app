export const messages = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return state.concat(action.message)
    default:
      return state
  }
}
