import ShowsCard from './ShowsCard';
import { useStarredShows } from '../../lib/useStarredShows';
import { FlexGrid } from '../common/FlexGrid';
import NotFoundImgSrc from '../../lib/not-found-image.png';

const ShowsGrid = ({ shows }) => {
  const [starredShow, dispatchStarred] = useStarredShows();

  const onStarMeClick = showId => {
    const isStarred = starredShow.includes(showId);

    if (isStarred) dispatchStarred({ type: 'UNSTAR', showId });
    else dispatchStarred({ type: 'STAR', showId });
  };

  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowsCard
          key={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : NotFoundImgSrc}
          summary={data.show.summary}
          id={data.show.id}
          onStarMeClick={onStarMeClick}
          isStarred={starredShow.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowsGrid;
