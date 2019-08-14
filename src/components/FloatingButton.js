import React from "react"

const style = {
  width: 'max-content',
  margin: '0 auto',
  position: 'sticky',
  top: '6em',
  border: 'none',
  backgroundColor: 'white',
  height: '2.5em',
  borderRadius: '18px',
  padding: '0 1em',
  fontSize: '1em',
  display: 'block',
  boxShadow: '0 9px 25px -5px rgba(197, 197, 197, 0.51), 0 -8px 25px -5px rgba(197, 197, 197, 0.4)',
  cursor: 'pointer'
}

const FloatingButton = (props) => {
  return <button onClick={props.handleScroll} style={style}>{`${props.unreadMessages} ${props.text}`}</button>
}

export default FloatingButton
