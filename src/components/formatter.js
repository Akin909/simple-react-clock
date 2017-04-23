import React from 'react';
import uuid from 'uuid/v4';
import { Hour, Second, Minute, Separator, Ampm } from './time';

export const Formatter = props => {
  let children = props.format.split('').map((e, index) => {
    if (e === 'h') {
      return <div><Hour key={uuid()} {...props} /><span>h</span></div>;
    } else if (e === 'm') {
      return <div key={uuid()}><Minute {...props} /><span> mins</span></div>;
    } else if (e === 's') {
      return <div key={uuid()}><Second {...props} /><span> secs</span></div>;
    } else if (e === 'p') {
      return <Ampm key={uuid()} {...props} />;
    } else if (e === 'T' || e === 'M') {
      return (
        <div key={uuid()}>
          <Hour {...props} />
          <Separator {...props} />
          <Minute {...props} />
          <Separator {...props} />
          <Second {...props} /> {e === 'M' ? '' : <Ampm {...props} />}
        </div>
      );
    }
  });
  return <span>{children}</span>;
};
// TODO Refactor ?with a switch statement
// switch (e) {
//   case 'h':
//     return <div><Hour key={uuid()} {...props} /><span>h</span></div>;
//   case 'm':
//     return <div key={uuid()}><Minute {...props} /><span> mins</span></div>;
//   case 's':
//     return <div key={uuid()}><Second {...props} /><span> secs</span></div>;
//   case 'p':
//     return <Ampm key={uuid()} {...props} />;
//   case 'M' || 'T':
//     return (
//       <div key={uuid()}>
//         <Hour {...props} />
//         <Separator {...props} />
//         <Minute {...props} />
//         <Separator {...props} />
//         <Second {...props} /> {e === 'M' ? '' : <Ampm {...props} />}
//         </div>
//         );
//         default:

// }
