import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/tvmaze';
import ShowsGrid from '../components/shows/ShowsGrid';
import { TextCenter } from '../components/common/TextCenter';
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
    return (
      <TextCenter>
        {' '}
        You are missing on your favourite Shows. STAR THEM!
      </TextCenter>
    );
  }
  if (starredShowsError) {
    return <TextCenter>Error Occured: {starredShowsError.message}</TextCenter>;
  }

  return <TextCenter>Loading...</TextCenter>;
};

export default Starred;
