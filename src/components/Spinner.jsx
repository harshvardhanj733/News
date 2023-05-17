import React, { Component } from 'react'
import loader from './Loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="" />
      </div>
    )
  }
}

export default Spinner
