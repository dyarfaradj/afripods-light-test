import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import moment from "moment";
import ArrowButton from "./ArrowButton";
import EpisodeListItem from "./EpisodeListItem";

const ItemWrapper = styled.div`
  min-height: 160px;
  width: 700px;
  background-color: lightgray;
  border-radius: 7px;
  margin: 20px 0 20px 0;
  padding: 0 15px 20px 15px;
  box-shadow: 0px 1px 4px 1px grey;
`;

const ItemTitle = styled.h2`
  margin-bottom: 4px;
  cursor: pointer;
`;

const SubContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemDate = styled.h5`
  margin: 0;
`;

const ItemSubTitle = styled.h5`
  margin: 0;
`;

const ItemDescription = styled.p`
  display: -webkit-box;
  max-width: 80%;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0px;
  ${({ showFull }) => !showFull && `-webkit-line-clamp: 4;`}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ListContainer = styled.div`
  max-height: 250px;
  overflow: hidden;
  overflow-y: auto;
`;

const ExtendButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  svg {
    transition: all 150ms ease-in-out;
    margin-left: 3px;
  }
`;

const PodcastListItem = ({
  item: { id, title, numberOfEpisodes, description, created },
  episodes,
  showFull,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <ItemWrapper key={id}>
      <ItemTitle onClick={() => router.push("/podcast/" + id)}>
        {title}
      </ItemTitle>
      <SubContent>
        <ItemDate>{moment(created).format("YYYY-MM-DD")}</ItemDate>
        <ItemSubTitle>{numberOfEpisodes} episodes</ItemSubTitle>
      </SubContent>
      <Bottom>
        <ItemDescription showFull={showFull || open}>
          {description}
        </ItemDescription>
        {!showFull && (
          <ExtendButton onClick={() => setOpen((v) => !v)}>
            Show more <ArrowButton size="24" direction={open ? "up" : "down"} />
          </ExtendButton>
        )}
      </Bottom>
      {(open || showFull) && (
        <ListContainer>
          {episodes?.map((e) => (
            <EpisodeListItem item={e} />
          ))}
        </ListContainer>
      )}
    </ItemWrapper>
  );
};

export default PodcastListItem;
