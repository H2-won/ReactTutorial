import React, { useReducer, Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1,
    updateMe: {
      toggleMe: false,
      dontChangeMe: 1,
    },
  };

  handleIncrase = () => {
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
    this.setState({
      counter: this.state.counter - 1,
    });
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  // handleToggle = () => {
  //   this.setState({
  //     updateMe: {
  //       ...this.state.updateMe,
  //       toggleMe: !this.state.updateMe.toggleMe,
  //     },
  //   });
  // };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrase}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>{this.state.fixed}</p>
      </div>
    );
  }
}

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       throw new Error('Unhandled action');
//   }
// }

// function Counter() {
//   // 초기값 0
//   const [number, dispatch] = useReducer(reducer, 0);

//   const increase = () => {
//     dispatch({
//       type: 'INCREMENT',
//     });
//   };
//   const decrease = () => {
//     dispatch({
//       type: 'DECREMENT',
//     });
//   };
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={decrease}>-1</button>
//       <button onClick={increase}>+1</button>
//     </div>
//   );
// }

export default Counter;
