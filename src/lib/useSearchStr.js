import { useEffect, useState } from 'react';

const usePersistedState = (initialState, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const value = sessionStorage.getItem(sessionStorageKey);
    return value ? JSON.parse(value) : initialState;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);
  return [state, setState];
};

export const useSearchStr = () => {
  return usePersistedState('', 'searchString');
};
