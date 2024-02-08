import React, { Component } from 'react'

export default class SimpleCounterComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            toogleStatus: false,
        };
    }
    handleInc=()=>{
        if(!this.state.toogleStatus){
            this.setState({...this.state,count:this.state.count})
        }else{
            this.setState({...this.state,count:this.state.count+1})
        }
    }
    handleToggle=()=>{
        this.setState({...this.state,toogleStatus: !this.state.toogleStatus});
    }

  render() {
    console.log("This is simple Component",this.state.toogleStatus)
    return (
      <div>
        <h2>Simple Component</h2>
       <h4>{this.state.count}</h4>
        <div>
            <button onClick={this.handleToggle}>Set Toggle</button>
            <button onClick={this.handleInc}>Increment</button>
        </div>
      </div>
    )
  }
}


