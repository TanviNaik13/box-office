import ActorsCard from './ActorsCard';
const ActorsGrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          image={
            data.person.image
              ? data.person.image.medium
              : '/not-found-image.png'
          }
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
        />
      ))}
    </div>
  );
};

export default ActorsGrid;
