import ShowsCard from './ShowsCard';

const ShowsGrid = ({ shows }) => {
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
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
