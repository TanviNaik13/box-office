import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/tvmaze';
import ShowsGrid from '../components/shows/ShowsGrid';
const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: async () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length > 0) {
    return <ShowsGrid shows={starredShows} />;
  }
  if (starredShows?.length === 0) {
    return <div>You are missing on your favourite Shows. STAR THEM!</div>;
  }
  if (starredShowsError) {
    return <div>Error Occured: {starredShowsError.message}</div>;
  }

  return <div>Loading...</div>;
};

export default Starred;
