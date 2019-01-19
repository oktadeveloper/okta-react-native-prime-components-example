/**
 * Prime Components app
 * https://github.com/kewp/prime-components
 */

import React, { Component } from 'react';
import { Alert, StatusBar } from 'react-native';
import {
  Container, Header, Input, Processing, Keypad, ButtonRow, Login
} from './components';

class App extends Component {
  state = {
    number: 123456,
    factors: [],
    processing: false,
    running: false
  };

  getPrimes = (N) => {
    const factors = [];
    let num = N;
    let key = 0;
    while (num % 2 === 0) {
      factors.push({ value:'2', key: `prime_${key}` });
      key++;
      num /= 2;
    }
    let i; for (i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
      while (num % i === 0) {
        factors.push({ value: `${i}`, key: `prime_${key}` });
        key++;
        num /= i;
      }
    }
    if (num > 1) { factors.push({ value: `${num}`, key: `prime_${key}` }); }
    return factors;
  };

  press = (value) => {
    let { number } = this.state;
    if (value === 'Clear') {
      number = Math.floor(number / 10);
      this.setState({ number });
    } else if (value !== 'Go' && value !== 'Back' && number < 1000000) {
      if (number === 0) number = value; else number += value;
      this.setState({ number });
    } else if (value === 'Go' && number > 1) {
      this.setState({ processing: true });
      const factors = this.getPrimes(number);
      this.setState({ running: false });
      this.setState({ factors });
    } else if (value === 'Back') {
      this.setState({ processing: false });
    }
  };

  render() {
    const { state } = this;
    return (
      <Container>
        <StatusBar hidden />
        <Header>Prime Components</Header>
        <Input>{state.number}</Input>
        {state.processing ? (
          <Processing running={state.running} factors={state.factors} press={this.press} />
        ) : (
          <Keypad>
            <ButtonRow func={this.press} keys={['1', '2', '3']} />
            <ButtonRow func={this.press} keys={['4', '5', '6']} />
            <ButtonRow func={this.press} keys={['7', '8', '9']} />
            <ButtonRow func={this.press} keys={['0', 'Clear', 'Go']} />
          </Keypad>
        )}
      </Container>
    );
  }
}

export default App;
