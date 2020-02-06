import React, {Component} from 'react';
/*class HelloWorld extends Component {
  render() {
    return (
      <div>
<center> <strong><font color="gold"> <p> Hello World </p> </font></strong></center>
      </div>
    )
  }
}
export default HelloWorld*/
import "./App.css"
class Counter extends Component {
  constructor () {
    super();
    this.state = {
      count:0,
    }
  }

  //METHODS Live here: Below constructor () block and above the render block ()
  increment = () => {
    this.setState ({
      count: this.state.count +1})
       //i=0; i>= 0; i++
  }
  decrement = () => {
    this.setState ({
      count: this.state.count -1})
       //i=0; i>= 0; i++
  }
  render() {
  return(
    <div className="container">
    <div className="navBar">Counter</div>
  <div className="numberDisplay"></div>
    <font color="gold"><h1>{this.state.count} </h1></font>
    <button type="incrementButton" onClick= {this.increment}> Increment (Increase)</button>
    <button type="decrementButton" onClick= {this.decrement}> Decrement (Decrease) </button>
    <div> </div>
    </div>
  )
  }
}
export default Counter
