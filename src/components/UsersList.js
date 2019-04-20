import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

import styles from "./UsersList.module.css"

const UsersList = () => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles["users-h2"]}>&nbsp;Users</h2>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; User 1
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; User 2
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; User 3
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; User 4
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; User 5
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; User 6
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; User 7
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; User 8
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; User 9
      </li>
    </aside>
  )
}

export default UsersList
