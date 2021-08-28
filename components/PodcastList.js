import styled from "styled-components";
import { episodes, podcasts } from "../utils/mockData";
import PodcastListItem from "./PodcastListItem";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 56px;
  padding: 0 25px 0 25px;
  color: black;
`;

const Title = styled.h1`
  margin-bottom: 0;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
`;

const PodcastList = () => {
  return (
    <Wrapper>
      <ListWrapper>
        <Title>Available podcasts</Title>
        {podcasts.map((p) => (
          <PodcastListItem
            item={p}
            episodes={episodes.filter((x) => x.podcast.id === p.id)}
          />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default PodcastList;
