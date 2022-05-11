import React, { useCallback, useMemo, useState } from 'react';
import { ICountry } from '../types/Country.type';
import { IFormData, FormDataFieldType } from '../types/FormData.type';
import Input from './Input';
import Select from './Select';

interface IFormProps {
  countries: ICountry[]
}

const Form = ({ countries }: IFormProps) => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    surname: '',
    password: '',
    email: '',
    phone: '',
    country: '',
    postal: '',
    address: '',
  });

  const handleChange = useCallback((field: FormDataFieldType) => (value: string) => setFormData((current) => ({ ...current, [`${field}`]: value })), []);
  const handleSelectChange = useCallback(() => handleChange('country'), [handleChange]);
  const options = useMemo(() => countries.map((country) => country.name.common), [countries]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} method="get">
      <Input id="name" label="Name" value={formData.name} onChange={handleChange('name')} />
      <Input id="surname" label="Surname" value={formData.surname} onChange={handleChange('surname')} />
      <Input id="password" label="Password" type="password" value={formData.password} onChange={handleChange('password')} />
      <Input id="email" label="Email" value={formData.email} onChange={handleChange('email')} />
      <Input id="phone" label="Phone" value={formData.phone} onChange={handleChange('phone')} />
      <Select id="countries" label="Country" value={formData.country} onChange={handleSelectChange} options={options} />
      <Input id="postal" label="Postal" value={formData.postal} onChange={handleChange('postal')} />
      <Input id="address" label="Address" value={formData.address} onChange={handleChange('address')} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
