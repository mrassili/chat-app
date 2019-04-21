import React, { Component } from "react"
import UsersList from "./components/UsersList"
import ChatWindow from "./components/ChatWindow"
import NewMessage from "./components/NewMessage"
import "./reset.css"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="container">
        <main className="main-window">
          <UsersList />
          <ChatWindow />
          <NewMessage />
        </main>
      </div>
    )
  }
}

export default App
