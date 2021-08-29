import styled from "styled-components";
import PodcastListItem from "components/PodcastListItem";
import Link from "components/Link";

const StyledP = styled.p`
  text-decoration: underline;
`;

const Podcast = ({ podcast, episodes }) => (
  <>
    <Link href="/">
      <StyledP>Go Back</StyledP>
    </Link>
    <PodcastListItem item={podcast} episodes={episodes} showFull />
  </>
);

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/podcast`);
  const podcasts = await res.json();

  const paths = podcasts?.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const podcastRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/podcast/${params.id}`
  );
  const podcast = await podcastRes.json();

  const episodeRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/podcast/${params.id}/episodes`
  );
  const episodes = await episodeRes.json();

  return { props: { podcast, episodes } };
}

export default Podcast;
