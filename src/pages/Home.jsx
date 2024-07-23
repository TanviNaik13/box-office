import { useState, useReducer } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchShow, searchPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const reducerFn = (currCounter, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return currCounter + 1;
    case 'DECREMENT':
      return currCounter - 1;
    case 'RESET':
      return 0;
  }
  return 0;
};

const Home = () => {
  const [filter, setFiIter] = useState('');

  const [counter, dispatch] = useReducer(reducerFn, 0);

  const onIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const onDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const onReset = () => {
    dispatch({ type: 'RESET' });
  };

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
      <div>Counter: {counter}</div>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
      <button type="button" onClick={onReset}>
        Reset
      </button>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
