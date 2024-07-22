import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchShow, searchPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
  const [filter, setFiIter] = useState('');

  const { data: apiData, error: apiErr } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchShow(filter.q)
        : searchPeople(filter.q),
    //disabled as Long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFiIter({ q, searchOption });
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
