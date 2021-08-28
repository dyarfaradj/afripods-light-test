import Link from "next/link";
import styled from "styled-components";
import moment from "moment";
import ArrowButton from "./ArrowButton";

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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PodcastListItem = ({
  item: { id, title, numberOfEpisodes, description, created },
}) => {
  return (
    <ItemWrapper key={id}>
      <Link
        href={{
          pathname: "podcast/[id]",
          query: {
            id: id,
          },
        }}
      >
        <ItemTitle>{title}</ItemTitle>
      </Link>

      <SubContent>
        <ItemDate>{moment(created).format("YYYY-MM-DD")}</ItemDate>
        <ItemSubTitle>{numberOfEpisodes} episodes</ItemSubTitle>
      </SubContent>
      <Bottom>
        <ItemDescription>{description}</ItemDescription>
        <div>
          Show more <ArrowButton size="24" direction="down" />
        </div>
      </Bottom>
    </ItemWrapper>
  );
};

export default PodcastListItem;
