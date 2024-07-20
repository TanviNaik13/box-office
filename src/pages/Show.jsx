import { useParams } from 'react-router-dom';
const Show = () => {
  const { showId } = useParams();
  return <div>SHOW PAGE : {showId}</div>;
};

export default Show;
