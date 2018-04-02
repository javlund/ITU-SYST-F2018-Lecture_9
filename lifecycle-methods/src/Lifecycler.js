import React, { Component } from 'react';

class Lifecycler extends Component {

  state = {
    counter: 0
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps - props: ' + JSON.stringify(props));
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate - nextProps: ' + JSON.stringify(nextProps) + ', nextState: ' + JSON.stringify(nextState));
  }

  componentDidUpdate(previousProps, previousState) {
    console.log('componentDidUpdate - previousProps: ' + JSON.stringify(previousProps) + ', previousState: ' + JSON.stringify(previousState));
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div className="App">
        <p>
          <button onClick={() => this.increaseCounter()}>Tæl op</button>
        </p>
        <p>
          Tæller: {this.state.counter}
        </p>
        <p>
          Valgt option: {this.props.option}
        </p>
      </div>
    );
  }
}

export default Lifecycler;
