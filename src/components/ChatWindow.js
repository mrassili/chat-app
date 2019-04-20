import React from "react"
import styles from "./ChatWindow.module.css"

const ChatWindow = (props) => {
  return (
    <section className={styles["chat-window"]}>
      <h2 className={styles["messages-h2"]}>&nbsp;Chat Messages</h2>
      {props.children}
    </section>
  )
}

export default ChatWindow
