import React from "react"
import MessageBubble from "./MessageBubble"
import FloatingButton from "./FloatingButton"
import SoundEffect from "./SoundEffect"
import styles from "./ChatWindow.module.css"
import { connect } from "react-redux"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "animate.css"
import { subscribeToMessages } from "../actions"

const NotificationBubble = (props) => {
  return (
    <span
      style={{
        border: "1px solid white",
        borderRadius: "20px",
        fontSize: ".5em",
        padding: ".1em .4em",
        marginLeft: "-.45em",
        verticalAlign: "top",
        color: "#00379f",
        backgroundColor: "white",
        fontWeight: "700",
      }}
    >
      {props.unreadMessages}
    </span>
  )
}

class ChatWindow extends React.Component {
  constructor(props) {
    super(props)
    this.chatWindowRef = React.createRef()
    this.state = {
      newMessages: false
    }
  }

  unreadMessages = 0

  scrollIsPinnedToBottom = () => {
    const { scrollHeight, clientHeight, scrollTop } = this.chatWindowRef.current
    return scrollHeight === clientHeight + scrollTop
  }

  componentDidMount() {
    this.scrollToBottom()

    this.props.subscribeToMessages()
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
    const { scrollHeight } = this.chatWindowRef.current
    this.chatWindowRef.current.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    })
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
        <h2 className={styles["messages-h2"]}>&nbsp;Chat Messages</h2>

        <CSSTransition
          in={this.state.newMessages}
          timeout={300}
          unmountOnExit
          classNames={{
            enter: "animated faster",
            enterActive: "fadeInDown",
            exit: "animated faster",
            exitActive: "fadeOutUp",
          }}
        >
          <FloatingButton
            text="New Messages"
            unreadMessages={this.unreadMessages}
            handleScroll={this.scrollToBottom}
          />
        </CSSTransition>

        <TransitionGroup>
          {this.props.messages.map((message) => {
            return (
              <CSSTransition
                timeout={400}
                classNames={{
                  enter: "animated faster",
                  enterActive: "slideInUp",
                }}
                key={message.id}
              >
                <MessageBubble message={message.content} />
              </CSSTransition>
            )
          })}
        </TransitionGroup>
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
  { subscribeToMessages },
)(ChatWindow)
