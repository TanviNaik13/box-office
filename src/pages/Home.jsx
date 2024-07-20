import { useState } from 'react';
import { searchShow, searchPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiErr, setApiErr] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiErr(null);
      let result;
      if (searchOption === 'shows') {
        result = await searchShow(q);
      } else {
        result = await searchPeople(q);
      }
      setApiData(result);
    } catch (error) {
      setApiErr(error);
    }
  };

  const renderApiData = () => {
    if (apiErr) {
      return <div>Error Occured: {apiErr.message}</div>;
    }

    if (apiData?.length === 0) return <div>No Results :(</div>;

    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }

    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
