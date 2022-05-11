import React from 'react';
import Slow from './Slow';

interface ISelectProps {
  id: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
  options: string[];
}

const Select = ({
  id, value, label, onChange, options,
}: ISelectProps) => (
  <div>
    <Slow />
    <label htmlFor={id}>
      {label}
      :
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value || '')}
      >
        <option key="none" disabled value="">---</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  </div>
);

export default Select;
