import PodcastListItem from "../../../components/PodcastListItem";

export async function getStaticPaths() {
  const res = await fetch("/api/podcast");
  const podcasts = await res.json();

  const paths = podcasts.map((podcast) => ({
    params: { id: podcast.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`/api/podcast/${params.id}`);
  const podcast = await res.json();

  const episodeRes = await fetch(`/api/podcast/${params.id}/episodes`);
  const episodes = await episodeRes.json();

  return { props: { podcast, episodes } };
}

const Podcast = ({ podcast, episodes }) => {
  return <PodcastListItem item={podcast} episodes={episodes} showFull />;
};

export default Podcast;
