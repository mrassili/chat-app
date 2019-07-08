import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames"
import styles from "./UsersList.module.css"

const UsersList = () => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles["users-h2"]}>&nbsp;Users</h2>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; Marcas Durnin
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; Yahya Wirner
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; Zacharias Ivanov
      </li>
      <li className={classNames(styles.user, styles.activeUser)}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; Zsuzsanna Pololáník
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; Vladimíra Zanetti
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; Katja Gang
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; Cadmus Medved
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; Ariston Zahradník
      </li>
      <li className={styles.user}>
        <FontAwesomeIcon icon={faUserCircle} />
        &nbsp; Anka Traylor
      </li>
    </aside>
  )
}

export default UsersList
