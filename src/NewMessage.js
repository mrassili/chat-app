import React from "react"
import styles from "./NewMessage.module.css"

const NewMessage = () => {
  return (
    <section>
      <span className={styles.span}>&nbsp;New Message&nbsp;</span>
      <input className={styles.input} placeholder="Type something…" />
    </section>
  )
}

export default NewMessage
