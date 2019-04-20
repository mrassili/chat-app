import React from "react"
import styles from "./NewMessage.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const NewMessage = () => {
  return (
    <section className={styles.box}>
      <span className={styles.span}>&nbsp;New Message&nbsp;</span>
      <input className={styles.input} placeholder="Type something…" />
      <button className={styles["send-btn"]}>
        send &nbsp;
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </section>
  )
}

export default NewMessage
