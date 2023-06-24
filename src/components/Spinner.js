import React, { Component } from 'react'
import loading from './loading.gif'


// spinner add karne ke liye sabse phele ek loading gif leke aaye joki ajaz se mila
// uske baad usko import kiya yaha
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'> 
        <img className='text-center' src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
