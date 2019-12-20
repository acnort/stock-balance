import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  state = {
    value: ''
  }

  setValue = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    const { name } = this.props
    const { value } = this.state

    return (
      <input
        type='text'
        name={name}
        value={value}
        onChange={this.setValue}
      />
    )
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired
}

export default Input
