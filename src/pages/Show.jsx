import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
const Show = () => {
  const { showId } = useParams();

  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }
    }

    fetchData();
  }, [showId]);

  if (showError) {
    return <div>Error occured: {showError.message}</div>;
  }

  if (showData) {
    return <div>Got Show Data: {showData.name}</div>;
  }

  return <div>loading</div>;
};

export default Show;
