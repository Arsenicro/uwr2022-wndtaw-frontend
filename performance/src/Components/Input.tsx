import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';

interface IInputProps {
  id: string;
  label: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}

const Input = ({
  id, label, type = 'text',
}: IInputProps) => {
  const call = useCallback(debounce((value: string) => console.log(value), 1000), []);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => call(e.target.value);
  return (
    <div>
      <label htmlFor={id}>
        {label}
        :
        <input
          id={id}
          name={id}
          type={type}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Input;
