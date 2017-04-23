import React from 'react';
import { Hour, Second, Minute, Separator, Ampm } from './time';

export const Formatter = ({ format, state }) => {
  let children = format.split('').map((e, index) => {
    if (e === 'h') {
      return <Hour />;
    } else if (e === 'm') {
      return <Minute />;
    } else if (e === 's') {
      return <Second />;
    } else if (e === 'p') {
      return <Ampm />;
    } else if (e === ' ') {
      <span />;
    }
  });
  return (
    <div>
      {React.Children.map((children, c) => React.cloneElement(c, state))}
    </div>
  );
};
