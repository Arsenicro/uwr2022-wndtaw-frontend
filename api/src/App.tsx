import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>(undefined);
  const [page, setPage] = useState(1);

  const client = axios.create({
    baseURL: 'https://animechan.vercel.app/api',
  });

  const getData = useCallback(() => {
    axios.post(
      `/quotes/anime?title=naruto&page=${page}`,
    )
      .then((quotes) => setData(quotes.data))
      .catch((reason) => console.log(reason));
  }, [page]);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => setPage((p) => p + 1)}>Next Page</button>
        <button type="button" onClick={() => { getData(); }}>Refresh</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            count is:
            {' '}
            {count}
          </button>
        </p>
        <p>
          Edit
          {' '}
          <code>App.tsx</code>
          {' '}
          and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
