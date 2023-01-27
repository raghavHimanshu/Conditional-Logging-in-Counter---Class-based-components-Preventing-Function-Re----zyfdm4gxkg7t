import React from 'react'
import '../styles/App.css';

class App extends React.Component{
  
  handleClick(){
    this.setState({count: this.state.count + 1})
  }
  constructor(props){
    super(props)
    this.state = {count:0,even:0}
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUpdate() {
    if(this.state.count % 2 === 0){
      this.setState({even:this.state.even = this.state.count})
    }
  }

  render(){
    console.log(`Rendering with count:-${this.state.even}`)
    return(
      <div>
        <span id="count">{this.state.even}</span>
        <button id="incr-btn" onClick={this.handleClick}>Increment</button>
      </div>
    )

  }
}

export default App;
