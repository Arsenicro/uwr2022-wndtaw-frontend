import React from 'react';

let value = 3;

const Slow = () => {
  for (let i = 0; i < 8000000; i += 1) {
    value **= i;
  }
  return null;
};

export default Slow;
