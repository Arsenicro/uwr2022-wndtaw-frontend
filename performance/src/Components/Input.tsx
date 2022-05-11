import React from 'react';

interface IInputProps {
  id: string;
  value: string;
  label: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  onChange: (value: string) => void;
}

const Input = ({
  id, value, label, type = 'text', onChange,
}: IInputProps) => (
  <div>
    <label htmlFor={id}>
      {label}
      :
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value || '')}
      />
    </label>
  </div>
);

export default Input;
