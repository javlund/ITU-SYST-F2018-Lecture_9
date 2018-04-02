import React, { Component } from 'react';
import PropsReceiver from './PropsReceiver';

class App extends Component {
  state = {
    counter: 0
  }
  
  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Props & state</h1>
        </header>
        <p>
          Værdi af state: {this.state.counter}
        </p>
        <p>
          <button onClick={() => this.increaseCounter()}>Tæl op</button>
        </p>
        <PropsReceiver amount={this.state.counter * 2} />
      </div>
    );
  }
}

export default App;
