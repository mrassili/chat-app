import React from "react"
import styles from "./NewMessage.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import db from "../firebase"

const messagesRef = db.ref("messages/")

class NewMessage extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()

    this.state = {
      input: "",
    }
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }

  handleInput = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSend = () => {
    /*  flow logic:
     *  on submit, save the message on the db
     *  update ui state to reflect the new message
     *  *on a global level*, set a .on listener to update 
     *  state whenever a message (from another user)
     *  was added
     */
    if (!this.state.input) {return }
    messagesRef.push({
      content: this.state.input
    })
    this.setState({ input: "" })
    this.inputRef.current.focus()
  }

  handleSubmit = (e) => {
    // allow sending over "Enter" press
    e.preventDefault()
  }

  render() {
    return (
      <section className={styles.box}>
        <span className={styles.span}>&nbsp;New Message&nbsp;</span>
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            placeholder="Type something…"
            onChange={this.handleInput}
            value={this.state.input}
            ref={this.inputRef}
          />
          <button
            type="submit"
            className={styles["send-btn"]}
            onClick={this.handleSend}
          >
            send &nbsp;
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </section>
    )
  }
}

export default NewMessage
