import React, { Component } from 'react';
import { increaseCounter, decreaseCounter } from '../actions';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div className='counter'>
        <button
          onClick={() => this.props.decreaseCounter(this.props.counter)}>
          -
        </button>
        <h3>{this.props.counter}</h3>
        <button
          onClick={() => this.props.increaseCounter(this.props.counter)}>
          +
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: (counter) => dispatch(increaseCounter(counter)),
  decreaseCounter: (counter) => dispatch(decreaseCounter(counter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
