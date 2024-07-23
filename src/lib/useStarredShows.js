import { useEffect, useReducer } from 'react';

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

  export const useStarredShows = ()=>{
    return usePersistedReducer(starredShowReducer,[],'starredShows')
  };