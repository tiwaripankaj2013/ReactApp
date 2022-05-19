import React, { Component } from 'react';

class CounterClass extends Component {
 constructor(){
    super();
    this.state = {count:1}
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
 }
   increment(){
      this.setState({count:parseInt(this.state.count) + 1});
   }
   decrement(){
      this.setState({count:parseInt(this.state.count) - 1});
   }
   changeHandler = (e) =>{
     this.setState({count:e.target.value});
   }
  render() {
    return (
      <div className="p-6 mx-auto flex max-w-xs justify-center mt-8">
      <button
        className={` text-2xl p-2 text-white ${this.state.count<=0 ? 'bg-red-700 cursor-not-allowed' :'bg-teal-800 cursor-pointer'}`} disabled={this.state.count<=0 ? true :false}
        onClick={this.decrement}
      >
        -
      </button>
      <div className="px-4 border border-teal-600 text-lg flex items-center">
        <input type="number" value={this.state.count} onChange={this.changeHandler} />
      </div>

      <button
        className=" bg-violet-800 text-2xl p-2 text-white"
        onClick={this.increment}
      >
        +
      </button>
    </div>
    )
  }
}

export default CounterClass;