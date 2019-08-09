import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {createStore, applyMiddleware, compose} from "redux"
import { Provider } from "react-redux"
import chat from "./rootReducer"
import thunk from "redux-thunk"

import "focus-visible/dist/focus-visible.js"

const store = createStore(
  chat,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
)
