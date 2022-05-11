import React from 'react';
import Slow from './Slow';

interface ISelectProps {
  id: string;
  label: string;
  options: string[];
}

const Select = ({
  id, label, options,
}: ISelectProps) => (
  <div>
    <Slow />
    <label htmlFor={id}>
      {label}
      :
      <select
        id={id}
        name={id}
      >
        <option key="none" disabled value="">---</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  </div>
);

export default React.memo(Select);
