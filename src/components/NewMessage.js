import React from "react"
import styles from "./NewMessage.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux"
import { addMessage } from "../actions"

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
    this.state.input && this.props.addMessage(this.state.input)
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

export default connect(
  null,
  { addMessage },
)(NewMessage)
