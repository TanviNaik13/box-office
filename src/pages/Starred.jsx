import { useStarredShows } from '../lib/useStarredShows';

const Starred = () => {
  const [starredShow] = useStarredShows();

  return <div>Starred pages :- {starredShow.length}</div>;
};

export default Starred;
