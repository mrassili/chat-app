import React from "react"
import MessageBubble from "./MessageBubble"
import SoundEffect from "./SoundEffect"
import styles from "./ChatWindow.module.css"
import { connect } from "react-redux"

class ChatWindow extends React.Component {
  render() {
    return (
      <section className={styles["chat-window"]}>
        <h2 className={styles["messages-h2"]}>&nbsp;Chat Messages</h2>
        {this.props.messages.map((message) => {
          return <MessageBubble message={message.text} key={message.id} />
        })}
        <SoundEffect />
      </section>
    )
  }
}

const mapStateToProps = ({ messages }) => ({
  messages,
})

export default connect(
  mapStateToProps,
  null,
)(ChatWindow)
