import ShowsCard from './ShowsCard';
import { useStarredShows } from '../../lib/useStarredShows';
const ShowsGrid = ({ shows }) => {
  const [starredShow, dispatchStarred] = useStarredShows();

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
          isStarred={starredShow.includes(data.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
