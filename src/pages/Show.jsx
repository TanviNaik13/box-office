import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';

import { useQuery } from '@tanstack/react-query';
const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>Error occured: {showError.message}</div>;
  }

  if (showData) {
    return <div>Got Show Data: {showData.name}</div>;
  }

  return <div>loading</div>;
};

export default Show;
