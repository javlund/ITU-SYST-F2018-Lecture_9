import React, { Component } from 'react';
import carnivores from './carnivores';
import Animal from './Animal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          {carnivores.length && carnivores.map(carnivore => (
            <Animal
              name={carnivore.navn}
              latin={carnivore.latin}
              sound={carnivore.lyd()}
              key={carnivore.latin} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
