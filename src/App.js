import React, { Component } from 'react'
import './App.css'
import Type from './components/Type'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Type element='h1' order='title'>This is a regular title</Type>
        <Type element='h2' order='title' size='smaller'>This is a smaller title</Type>
        <Type element='h3' order='subtitle' size='larger'>This is a larger subtitle</Type>
        <Type element='h4' order='subtitle'>This is a regular subtitle</Type>
        <Type element='h5' order='subtitle' size='smaller'>This is a smaller subtitle</Type>
        <Type element='h6' order='subtitle' size='smallest'>This is a smallest subtitle</Type>
        <Type element='p' order='body' size='larger'>This is a larger body</Type>
        <Type element='p' order='body'>This is a regular body</Type>
        <Type element='p' order='body' size='smaller'>This is a smaller body</Type>
        <Type element='p' order='body' size='smallest'>This is a smallest body</Type>
        <Type element='div' order='label'>This is a regular label</Type>
      </div>
    )
  }
}

export default App
