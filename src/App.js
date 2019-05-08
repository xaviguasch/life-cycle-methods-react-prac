import React from 'react'
import Timer from './Timer'
import ZenQuote from './ZenQuote'
import GithubUserInfo from './GithubUserInfo'

import './App.css'

function App() {
  return (
    <div className='App'>
      <GithubUserInfo username='facebook' />
      <GithubUserInfo username='colt' />
      <GithubUserInfo username='sophiebits' />
    </div>
  )
}

export default App
