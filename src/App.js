import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import './App.css';
// API Key: 827985a64a544af4a33a05ef2f78c0c4


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={8} country="in" category="science" />
      </div>
    )
  }
}