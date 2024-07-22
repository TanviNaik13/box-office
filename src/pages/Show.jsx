import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';

import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Cast from '../components/shows/Cast';
import Seasons from '../components/shows/Seasons';
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
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          genres={showData.genres}
          rating={showData.rating}
          summary={showData.summary}
        />

        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>loading</div>;
};

export default Show;
