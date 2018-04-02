import React, { Component } from 'react';
import Lifecycler from './Lifecycler';

const numberOfOptions = 5;
const options = [];
for(let i = 0; i < numberOfOptions; i++) {
  options.push(<option key={i} value={i}>{i}</option>);
}

class Container extends Component {
  state = {
    option: 0
  }

  selectOption(event) {
    this.setState({
      option: event.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <select onChange={event => this.selectOption(event)}>
          {options}
        </select>
        <Lifecycler option={this.state.option} />
      </div>
    );
  }
}

export default Container;