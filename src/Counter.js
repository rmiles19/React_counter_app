import React from 'react';

class Counter extends React.Component {
  state = { value: 0 }

  inc = () => {
    this.setState( state => {
      return { value: state.value + 1 }
    });
  }

  dec = () => {
    this.setState( state => {
      return { value: state.value - 1 }
    });
  }

  render() {
    const { name } = this.props;
    const { value } = this.state;
    return (
      <div style={{ backgroundColor: this.props.name, color: 'white'}}>
        <p>{this.props.name} counter </p>
        <p>{this.state.value}</p>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    )
  }
}

export default Counter;