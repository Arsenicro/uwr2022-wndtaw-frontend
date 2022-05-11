import React, { Suspense, useEffect, useState } from 'react';
import { ICountry } from './types/Country.type';

const Form = React.lazy(() => import('./Components/Form'));

const App = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((response) => setCountries(response));
  }, []);

  return (
    <div>
      <Suspense fallback="Loading...">
        <Form countries={countries} />
      </Suspense>
    </div>
  );
};

export default App;
