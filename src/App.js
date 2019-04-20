import React, { Component } from "react"
import UsersList from "./UsersList"
import ChatWindow from "./ChatWindow"
import NewMessage from "./NewMessage"
import MessageBubble from "./MessageBubble"
import "./reset.css"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="container">
        <main className="main-window">
          <UsersList />
          <ChatWindow>
            <MessageBubble>
              diam maecenas sed enim ut sem viverra aliquet eget sit
            </MessageBubble>
            <MessageBubble>
              adipiscing elit ut aliquam purus sit amet luctus venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus non enim
              praesent
            </MessageBubble>
            <MessageBubble>scelerisque eleifend</MessageBubble>
            <MessageBubble>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              sit amet venenatis urna.
            </MessageBubble>
            <MessageBubble>
              pharetra massa massa ultricies mi quis hendrerit dolor magna eget
              est lorem ipsum dolor sit
            </MessageBubble>
            <MessageBubble>
              pharetra massa massa ultricies mi quis hendrerit dolor magna eget
              est lorem ipsum dolor sit
            </MessageBubble>
            <MessageBubble>
              diam maecenas sed enim ut sem viverra aliquet eget sit
            </MessageBubble>
          </ChatWindow>
          <NewMessage />
        </main>
      </div>
    )
  }
}

export default App
