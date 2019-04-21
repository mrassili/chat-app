import React from "react"
import SoundEffect from "./SoundEffect"
import styles from "./MessageBubble.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-regular-svg-icons"

const Sender = () => {
  return (
    <FontAwesomeIcon
      icon={faUserCircle}
      style={{
        fontSize: "2em",
        verticalAlign: "middle",
        margin: ".5em",
        color: "#00379f",
      }}
    />
  )
}

const MessageBubble = (props) => {
  return (
    <>
      <div className={styles["message-banner"]}>
        <Sender />
        <span className={styles.bubble}>{props.message}</span>
        {/* move to chatWindow render method */}
        <SoundEffect />
      </div>
    </>
  )
}

export default MessageBubble
