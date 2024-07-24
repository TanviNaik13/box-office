import { FlexGrid } from '../common/FlexGrid';
import ActorsCard from './ActorsCard';
import NotFoundImgSrc from '../../lib/not-found-image.png';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          image={data.person.image ? data.person.image.medium : NotFoundImgSrc}
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
