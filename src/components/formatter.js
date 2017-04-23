import React from 'react';
import uuid from 'uuid/v4';

const Hour = props => {
  let { hours } = props;
  hours = hours === 0 ? 12 : hours;
  hours = props.twelveHours ? hours - 12 : hours;
  return <span>{hours}</span>;
};

const Minute = ({ minutes }) => <span>{minutes < 10 && '0'}{minutes}</span>;

const Second = ({ seconds }) => <span>{seconds < 10 && '0'}{seconds}</span>;

const Separator = ({ separator }) => <span>{separator || ':'}</span>;

const Ampm = ({ hours }) => <span>{hours >= 12 ? 'pm' : 'am'}</span>;

export const Formatter = props => {
  let children = props.format.split('').map((e, index) => {
    if (e === 'h') {
      return <Hour key={uuid()} {...props} />;
    } else if (e === 'm') {
      return <div key={uuid()}><Minute {...props} /><span> mins</span></div>;
    } else if (e === 's') {
      return <div key={uuid()}><Second {...props} /><span> secs</span></div>;
    } else if (e === 'p') {
      return <Ampm key={uuid()} {...props} />;
    } else if (e === 'T') {
      return (
        <div key={uuid()}>
          <Hour {...props} />
          <Separator {...props} />
          <Minute {...props} />
          <Separator {...props} />
          <Second {...props} /> <Ampm {...props} />
        </div>
      );
    }
  });
  return <span>{children}</span>;
};
