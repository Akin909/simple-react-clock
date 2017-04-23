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

const Select = styled.select`
  border: none;
  margin: 1rem;
  text-align: center;
  font-size: 1.3rem;
  font-family: 'Helvetica', sans-serif;
  box-shadow: 0px 1px 1px grey;
`;

const Title = styled.header`
  text-align: center;
  width: 100%;
  font-family: 'Helvetica', sans-serif;
  font-size: 2.0rem;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      format: 'T',
      twelveHours: true,
    };

    this.handleChoice = this.handleChoice.bind(this);
  }

  handleChoice(event) {
    event.preventDefault();
    console.log('name', event.target.value);
    this.setState({
      format: event.target.value,
      twelveHours: event.target.name === 'M' ? false : true,
    });
  }

  render() {
    return (
      <Container>
        <Title>Reactive Clock 😝</Title>
        <Select
          value={this.state.choice}
          onChange={this.handleChoice}
          id="time__options"
          name="time"
        >
          <option value="h">hours</option>
          <option value="m">minutes</option>
          <option value="s">seconds</option>
          <option value="T"> 12 hour clock</option>
          <option value="M"> 24 hour clock</option>
        </Select>
        <Clock {...this.state} />
      </Container>
    );
  }
}

export default App;
