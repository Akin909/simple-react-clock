import React from 'react';

export const Hour = props => {
  let { hours } = props;
  hours = hours === 0 ? 12 : hours;
  hours = props.twelveHours ? hours - 12 : hours;
  return <span>{hours}</span>;
};

export const Minute = ({ minutes }) => (
  <span>{minutes < 10 && '0'}{minutes}</span>
);

export const Second = ({ seconds }) => (
  <span>{seconds < 10 && '0'}{seconds}</span>
);

export const Separator = ({ separator }) => <span>{separator || ':'}</span>;

export const Ampm = ({ hours }) => <span>{hours >= 12 ? 'pm' : 'am'}</span>;
