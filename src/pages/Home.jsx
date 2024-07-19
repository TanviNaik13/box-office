import { useState } from 'react';
import { searchShow, searchPeople } from '../api/tvmaze';
const Home = () => {
  const [search, setSearch] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiErr, setApiErr] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  console.log(searchOption);

  const onInput = ev => {
    setSearch(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const searchSubmit = async ev => {
    ev.preventDefault();

    try {
      setApiErr(null);
      if (searchOption === 'shows') {
        const result = await searchShow(search);
        setApiData(result);
      } else {
        const result = await searchPeople(search);
        setApiData(result);
      }
    } catch (error) {
      setApiErr(error);
    }
  };

  const renderApiData = () => {
    if (apiErr) {
      return <div>Error Occured: {apiErr.message}</div>;
    }

    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={searchSubmit}>
        <input type="text" value={search} onChange={onInput} />

        <label>
          shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
          />
        </label>

        <label>
          actors
          <input
            type="radio"
            name="seach-option"
            value="actors"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
