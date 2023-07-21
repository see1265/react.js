import React, { Component } from 'react'

export default class Appppp extends Component {
    constructor()
    {
        super()
        this.state={
            count :0
        }
    }
    handelIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handelDecrement=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }else{
            alert("stop here")
        }
    }
    handelReset=()=>{
        this.setState({count:0})
    }
  render() {
    return (
      <div className='but'>
        <h1>{this.state.count}</h1>
        <button onClick={this.handelIncrement}>+</button>
        <button onClick={this.handelDecrement}>-</button>
        <button onClick={this.handelReset}>Reset</button>
      </div>
    )
  }
}
