// the reducer holds the state structure which is the returned (new) state

export const messages = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return state.concat({content: action.content, id: action.id})
    default:
      return state
  }
}
