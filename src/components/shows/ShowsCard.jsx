import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import { StarIcon } from '../common/StarIcon';

const ShowsCard = ({ name, image, summary, id, onStarMeClick, isStarred }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + '... '
    : 'No description';

  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <ActionSection>
        <Link to={`/show/${id}`} target="blank" rel="noreferrer">
          Read more
        </Link>
        <StarBtn type="button" onClick={() => onStarMeClick(id)}>
          <StarIcon active={isStarred} />
          {/* {isStarred ? 'Unstar' : 'Star'} */}
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};

export default ShowsCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
