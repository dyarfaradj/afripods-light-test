import EpisodeListItem from "components/EpisodeListItem";

const Episode = ({ episode }) => <EpisodeListItem item={episode} showFull />;

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/podcast/1/episodes`
  );
  const episodes = await res.json();

  const paths = episodes?.map((episode) => ({
    params: {
      id: episode.podcast.id.toString(),
      episodeId: episode.id.toString(),
    },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/podcast/${params.id}/episodes/${params.episodeId}`
  );
  const episode = await res.json();

  return { props: { episode } };
}

export default Episode;
