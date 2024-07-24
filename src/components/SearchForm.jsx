import { useState, useEffect } from 'react';
import { useSearchStr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearch] = useSearchStr();
  const [searchOption, setSearchOption] = useState('shows');

  // 1) mounts
  //2) rerender
  //2.5) logic before next rerender
  //3) unmount

  //useEffect runs ot least once

  useEffect(() => {
    console.log('search option changed');
  }, [searchOption]);

  const onInput = ev => {
    setSearch(ev.target.value);
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();
    const options = {
      q: searchStr,
      searchOption,
    };
    onSearch(options);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={onInput} />

        <CustomRadio
          label="Shows"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
        <CustomRadio
          label="Actors"
          name="search-option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioChange}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
