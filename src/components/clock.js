import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formatter } from './formatter';

const ClockContainer = styled.div`
  background: #acdffc;
  box-shadow: 0px 1px 1px grey;
  width: 50%;
  height: 20%;
  font-size: 1.5rem;
  font-family: Helvetica, sans-serif;
  text-align: center;
  vertical-align: middle;
  display:flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

class Clock extends Component {
  constructor(props) {
    super(props); // ALWAYS REQUIRED

    const currentTime = new Date();
    this.state = {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: this.hours >= 12 ? 'pm' : 'am',
    };
  }
  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
  setTimer() {
    setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    const currentTime = new Date();
    this.setState(
      {
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
        ampm: this.hours >= 12 ? 'pm' : 'am',
      },
      this.setTimer()
    );
  }
  render() {
    return (
      <ClockContainer className="clock">
        <Formatter {...this.state} format={this.props.format} />
      </ClockContainer>
    );
  }
}

Clock.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Clock;
