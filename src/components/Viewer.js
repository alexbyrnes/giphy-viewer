import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { connect } from 'react-redux'

class Viewer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  render () {
    const { isOpen } = this.state

    return (
      <div>
        <img src={this.props.image} onClick={() => this.setState({ isOpen: true })} alt={this.props.title}/>
        {isOpen && (
          <Lightbox
            mainSrc={this.props.image}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    )
  }
}

export default connect(null, {})(Viewer)
