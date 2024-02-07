import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
// API Key: 827985a64a544af4a33a05ef2f78c0c4

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

