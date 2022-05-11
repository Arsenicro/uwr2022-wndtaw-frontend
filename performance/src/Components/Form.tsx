import React, { useMemo } from 'react';
import { ICountry } from '../types/Country.type';
import Input from './Input';
import Select from './Select';

interface IFormProps {
  countries: ICountry[]
}

const Form = ({ countries }: IFormProps) => {
  const options = useMemo(() => countries.map((country) => country.name.common), [countries]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <form onSubmit={handleSubmit} method="get">
      <Input id="name" label="Name" />
      <Input id="surname" label="Surname" />
      <Input id="password" label="Password" type="password" />
      <Input id="email" label="Email" />
      <Input id="phone" label="Phone" />
      <Select id="countries" label="Country" options={options} />
      <Input id="postal" label="Postal" />
      <Input id="address" label="Address" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
