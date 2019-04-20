import { combineReducers } from "redux"
import { messages } from "./reducers"

const chat = combineReducers({ messages })

export default chat
