import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'

class App extends React.Component {
  state = {
    data,
    score: 0,
    wasClicked: [],
    topScore: 0,
    messages: ["You've Guessed Correctly!", "You've Guessed Incorrectly!"],
    message: "Click an image to begin!"
  }
  renderImages = () => {
    return this.state.data.map(item =>
      <img className="card" src={item.URL} value={item.ID} onClick={this.handleOnClick}></img>
    )
  }

  shuffleCards = () => {
    this.state.data.sort(() => 
    
      .5-Math.random()
    )
  }
  handleOnClick = e => {
    const ID = e.currentTarget.getAttribute("value")
    if (this.state.wasClicked.includes(ID)) {
      console.log("You've Clicked This Dummy!")
      { this.handleDecrement() }
    } else {
      this.shuffleCards()
      this.setState({
        wasClicked: this.state.wasClicked.concat(ID)
      })
      console.log(this.state.wasClicked)
      { this.handleIncrement() }
    }

  }

  handleIncrement = () => {

    this.setState({
      score: this.state.score + 1
    })
    this.setState({
      message: this.state.messages[0]
    })
  }

  handleDecrement = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      })
    }
    this.setState({
      score: 0
    })
    this.setState({
      message: this.state.messages[1]
    })
  }
  render() {
    console.log(this.state.data)
    return (

      //HTML for main page
      <div className="App">

        <div className="header">

          <img className="donut" src="https://i.imgur.com/R2onQ95.png"></img>
          <h4 className="top first">Simpson's Game</h4>
          <h4 className="top middle">{this.state.message}</h4>
          <h4 className="top">Your Score: {this.state.score}  | Top Score: {this.state.topScore}</h4>
        </div>

        <div className="instructions">
          <h1 className="info">THE SIMPSONS</h1>
          <h4 className="info">Memory Click Game!</h4>
          <h6 className="info">Click an image to earn points, but don't click on any image more than once!</h6>
        </div>
        <div className="game">
          <div className="images">
          {this.renderImages()}
          </div>
        </div>
      </div>
   
    );
  }

}

export default App;
