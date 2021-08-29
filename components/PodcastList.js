import styled from "styled-components";
import { episodes } from "utils/mockData";
import PodcastListItem from "./PodcastListItem";

const Title = styled.h1`
  margin-bottom: 0;
`;

const PodcastList = ({ title, podcasts }) => (
  <div>
    <Title>{title}</Title>
    {podcasts?.map((p) => (
      <PodcastListItem
        key={p.id}
        item={p}
        episodes={episodes.filter((x) => x.podcast.id === p.id)}
      />
    ))}
  </div>
);

export default PodcastList;
