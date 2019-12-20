import React, { Component } from 'react'

import { Input } from '..'

class NewStock extends Component {
  render() {
    return (
      <div>
        <Input name='stock' />
        <Input name='share' />
        <Input name='average-price' />
      </div>
    )
  }
}

export default NewStock
