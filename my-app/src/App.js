import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'

 class App extends React.Component {
  state = {
    data, 
    score: 0,
    wasClicked: []
  }
  renderImages = () => {
    return this.state.data.map(item => 
      <img className="card" src={item.URL} value={item.ID} onClick={this.handleOnClick}></img>
    )
  }

  handleOnClick = e => {
const ID = e.currentTarget.getAttribute("value")
if (this.state.wasClicked.includes(ID)) {
console.log("You've Clicked This Dummy!")
{this.handleDecrement()}
} else {
  this.setState({
    wasClicked: this.state.wasClicked.concat(ID)
  })
  console.log(this.state.wasClicked)
  {this.handleIncrement()}
}
   
  }

  handleIncrement = () => {
    this.setState({
      score: this.state.score +1
    })
  }
  
  handleDecrement = () => {
    this.setState({
      score: this.state.score -1
    })
  }
   render() {
   console.log(this.state.data)
    return (
      <div className="App">
        <h1>Your Score: {this.state.score}</h1>
    {this.renderImages()}  
      </div>
    );
   }
 
}

export default App;
