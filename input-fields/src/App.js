import React, { Component } from 'react';

class App extends Component {
  state = {
    input1: 'input 1',
    input2: 'input 2',
    input3: 'input 3',
    input4: 'input 4',
    input5: 'input 5'
  };

  editInput1(newValue) {
    this.setState({
      input1: newValue
    });
  }

  editInput5(newValue) {
    this.setState({
      input5: newValue
    });
  }

  render() {
    return (
      <div>
        <fieldset>
          <p>
            Uncontrolled: <input />
          </p>
          <p>
            Controlled: <input value={this.state.input1} onChange={event => this.editInput1(event.target.value)} />
          </p>
          <p>
            Broken: <input value={this.state.input2} />
          </p>
          <p>
            Uncontrolled, defaultValue: <input defaultValue={this.state.input3} />
          </p>
          <p>
            Read only: <input value={this.state.input4} readOnly />
          </p>
          <p>
            Write only: <input onChange={event => this.editInput5(event.target.value)} />
          </p>
        </fieldset>
        State:
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;
