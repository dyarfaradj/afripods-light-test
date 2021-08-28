import styled from "styled-components";
import { episodes, podcasts } from "../utils/mockData";
import PodcastListItem from "./PodcastListItem";

const Wrapper = styled.div``;

const Title = styled.h1`
  margin-bottom: 0;
`;

const PodcastList = () => {
  return (
    <Wrapper>
      <Title>Available podcasts</Title>
      {podcasts.map((p) => (
        <PodcastListItem
          item={p}
          episodes={episodes.filter((x) => x.podcast.id === p.id)}
        />
      ))}
    </Wrapper>
  );
};

export default PodcastList;
