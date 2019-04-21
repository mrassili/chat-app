import React from "react"
import tone from "./digi_plink.wav"

class SoundEffect extends React.Component {
  constructor(props) {
    super(props)
    this.audioRef = React.createRef()
  }

  componentDidUpdate() {
    this.play()
  }

  play = () => {
    this.audioRef.current.play()
  }

  render() {
    /* eslint-disable-next-line*/
    return <audio ref={this.audioRef} src={tone} />
  }
}

export default SoundEffect
