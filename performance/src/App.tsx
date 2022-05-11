import { useEffect, useState } from 'react';
import Form from './Components/Form';
import { ICountry } from './types/Country.type';

const App = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((response) => setCountries(response));
  }, []);

  return (
    <div>
      <Form countries={countries} />
    </div>
  );
};

export default App;
