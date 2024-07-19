import { useState } from 'react';

const Home = () => {
  const [search, setSearch] = useState('');

  const onInput = ev => {
    setSearch(ev.target.value);
  };

  const searchSubmit = async ev => {
    ev.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${search}`
    );
    const body = await response.json();
    console.log(body);
  };

  return (
    <div>
      <form onSubmit={searchSubmit}>
        <input type="text" value={search} onChange={onInput} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
