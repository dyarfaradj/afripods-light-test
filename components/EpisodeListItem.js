import { useRouter } from "next/router";
import styled from "styled-components";
import * as moment from "moment";
import "moment-duration-format";

const ItemWrapper = styled.div`
  background-color: lightgray;
  border-radius: 7px;
  margin: 20px 0 20px 0;
  padding: 0 15px 20px 15px;
  border: 1px solid black;
`;

const ItemTitle = styled.h3`
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const OpenLink = styled.div`
  cursor: pointer;
`;

const EpisodeListItem = ({
  item: { id, title, duration, description, created, podcast },
  showFull,
}) => {
  const router = useRouter();

  return (
    <ItemWrapper key={id}>
      <ItemTitle>{title}</ItemTitle>
      <SubContent>
        <ItemDate>{moment(created).format("YYYY-MM-DD")}</ItemDate>
        <ItemSubTitle>
          Length{" "}
          {moment.duration(duration, "seconds").format("d[d] h[h] m[m] s[s]", {
            trim: "both",
          })}
        </ItemSubTitle>
      </SubContent>
      <Bottom>
        <ItemDescription>{description}</ItemDescription>
        {!showFull && (
          <OpenLink
            onClick={() =>
              router.push("/podcast/" + podcast.id + "/episode/" + id)
            }
          >
            Open
          </OpenLink>
        )}
      </Bottom>
    </ItemWrapper>
  );
};

export default EpisodeListItem;
