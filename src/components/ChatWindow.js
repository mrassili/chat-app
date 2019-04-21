import React from "react"
import MessageBubble from "./MessageBubble"
import SoundEffect from "./SoundEffect"
import styles from "./ChatWindow.module.css"
import { connect } from "react-redux"

class ChatWindow extends React.Component {
  constructor(props) {
    super(props)
    this.chatWindowRef = React.createRef()
  }

  unreadMessages = 0

  scrollIsPinnedToBottom = () => {
    const { scrollHeight, clientHeight, scrollTop } = this.chatWindowRef.current
    return scrollHeight === clientHeight + scrollTop
  }

  getSnapshotBeforeUpdate() {
    return this.scrollIsPinnedToBottom()
  }

  componentDidUpdate(prevProps, prevState, scrollIsPinnedToBottom) {
    // don't scroll if the client is scrolled up
    if (scrollIsPinnedToBottom) {
      this.scrollToBottom()
    } else {
      /* as soon as we have 1 unread message
      render "1 UNREAD MESSAGES"
      */
      this.unreadMessages++
      this.unreadMessages === 1 && this.forceUpdate()
    }
  }

  scrollToBottom = () => {
    // scrollHeight = clientHeight + scrollTop
    // true if scroll is pinned to the bottom of the element
    const { scrollHeight, clientHeight } = this.chatWindowRef.current
    this.chatWindowRef.current.scrollTop = scrollHeight - clientHeight
    this.unreadMessages = 0
  }

  handleScroll = () => {
    if (this.scrollIsPinnedToBottom()) {
      this.unreadMessages = 0
    }
  }

  render() {
    return (
      <section
        className={styles["chat-window"]}
        ref={this.chatWindowRef}
        onScroll={this.handleScroll}
      >
        <h2 className={styles["messages-h2"]}>
          &nbsp;Chat Messages
          {Boolean(this.unreadMessages) && (
            <span className={styles.unread}>
              {this.unreadMessages} Unread Messages
            </span>
          )}
        </h2>
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
