import { useEffect, useReducer } from 'react';
import ShowsCard from './ShowsCard';

const usePersistedReducer = (reducer, initState, locStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initState, initial => {
    const value = localStorage.getItem(locStorageKey);

    return value ? JSON.parse(value) : initial;
  });
  useEffect(() => {
    localStorage.setItem(locStorageKey, JSON.stringify(state));
  }, [locStorageKey, state]);
  return [state, dispatch];
};

const starredShowReducer = (currentStar, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStar.concat(action.showId);
    case 'UNSTAR':
      return currentStar.filter(showId => showId !== action.showId);

    default:
      return currentStar;
  }
};
const ShowsGrid = ({ shows }) => {
  const [starredShow, dispatchStarred] = usePersistedReducer(
    starredShowReducer,
    [],
    'starredShows'
  );

  console.log({ starredShow });

  const onStarMeClick = showId => {
    const isStarred = starredShow.includes(showId);

    if (isStarred) dispatchStarred({ type: 'UNSTAR', showId });
    else dispatchStarred({ type: 'STAR', showId });
  };

  return (
    <div>
      {shows.map(data => (
        <ShowsCard
          key={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          summary={data.show.summary}
          id={data.show.id}
          onStarMeClick={onStarMeClick}
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
