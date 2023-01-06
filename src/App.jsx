import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Component } from 'react'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { url: "/", memesArray: [], interval: 5 }
  }

  componentDidMount() {
    let ok = this.state.interval
    fetch('https://meme-api.com/gimme/wow/10').then((res) =>
      res.json())
      .then(res => {
        const array = res.memes.map(meme => meme.url)
        this.setState(this.state.memesArray = array);
        let intervalID = setInterval(() => {
          this.setMemesUrl()
        }, (ok * 1000))
      })
  }

  setMemesUrl = () => {
    this.setState({ url: this.state.memesArray[Math.floor(Math.random() * 10)] })
  }

  handleSetInterval = (e) => {
    this.setState({ interval: e.target.value })
  }
  render() {
    return (
      <div className="app">
       
      </div>
    )
  }
}

export default App
