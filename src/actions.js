import * as types from "./ActionTypes"
import db from "./firebase"

const messagesRef = db.ref("messages/")

let messageId = 0

export const addMessage = (message) => ({
  type: types.ADD_MESSAGE,
  id: messageId++,
  ...message,
})

// listen for messages and update ui state
export const subscribeToMessages = () => (dispatch) => {
  messagesRef.on("child_added", (snapshot) => {
    const newMessage = snapshot.val()
    dispatch(addMessage(newMessage))
  })
}
