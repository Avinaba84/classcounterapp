import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
    };
  }

  // Method to increment count
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  decrement = ()=>{
    this.setState(prevState =>({
        count: prevState.count -1,
    }));
  };

  render(){
    return(
        <div>
            <h2>Counter App</h2>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>
    )
  }
};
export default Counter;