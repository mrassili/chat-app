import React from "react"
import styles from "./ChatWindow.module.css"

const ChatWindow = () => {
  return (
    <section className={styles["chat-window"]}>
      <h2 className={styles["users-h2"]}>&nbsp;Chat Messages</h2>
    </section>
  )
}

export default ChatWindow
