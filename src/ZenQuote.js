import React, { Component } from 'react'
import axios from 'axios'
import './ZenQuote.css'

class ZenQuote extends Component {
  constructor(props) {
    console.log('inside constructor')

    super(props)
    this.state = { quote: '', isLoaded: false }
  }

  componentDidMount() {
    console.log('inside cdmount')

    axios.get('https://api.github.com/zen').then(response => {
      setTimeout(() => {
        this.setState({ quote: response.data, isLoaded: true })
      }, 3000)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('inside cdupdate')
  }

  render() {
    console.log('inside render')

    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className='loader' />
        )}
      </div>
    )
  }
}

export default ZenQuote
