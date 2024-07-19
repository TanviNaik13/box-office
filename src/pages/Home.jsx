import { useState } from 'react';
import { searchShow } from '../api/tvmaze';
const Home = () => {
  const [search, setSearch] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiErr, setApiErr] = useState(null);

  const onInput = ev => {
    setSearch(ev.target.value);
  };

  const searchSubmit = async ev => {
    ev.preventDefault();

    try {
      setApiErr(null);
      const result = await searchShow(search);
      setApiData(result);
    } catch (error) {
      setApiErr(error);
    }
  };

  const renderApiData = () => {
    if (apiErr) {
      return <div>Error Occured: {apiErr.message}</div>;
    }

    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={searchSubmit}>
        <input type="text" value={search} onChange={onInput} />
        <button type="submit">Search</button>
      </form>

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
