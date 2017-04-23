import React, { Component } from 'react';
import Clock from './components/clock';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: '',
    };

    this.handleChoice = this.handleChoice.bind(this);
  }

  handleChoice(event) {
    event.preventDefault();
    this.setState({
      choice: event.target.value,
    });
  }

  render() {
    return (
      <Container>
        <select
          value={this.state.choice}
          onChange={this.handleChoice}
          id="time__options"
          name="time"
        >
          <option value="h">hours</option>
          <option value="m">minutes</option>
          <option value="s">seconds</option>
          <option value="T"> 12 hour clock</option>
        </select>
        <Clock format={this.state.choice} />
      </Container>
    );
  }
}

export default App;
