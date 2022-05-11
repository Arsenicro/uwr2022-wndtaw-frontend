import React from 'react';

interface IInputProps {
  id: string;
  label: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}

const Input = ({
  id, label, type = 'text',
}: IInputProps) => (
  <div>
    <label htmlFor={id}>
      {label}
      :
      <input
        id={id}
        name={id}
        type={type}
      />
    </label>
  </div>
);

export default Input;
