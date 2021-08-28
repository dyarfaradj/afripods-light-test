import EpisodeListItem from "../../../../components/EpisodeListItem";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/podcast/1/episodes");
  const episodes = await res.json();

  const paths = episodes.map((episode) => ({
    params: {
      id: episode.podcast.id.toString(),
      episodeId: episode.id.toString(),
    },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/podcast/${params.id}/episodes/${params.episodeId}`
  );
  const episode = await res.json();

  return { props: { episode } };
}

const Episode = ({ episode }) => {
  return <EpisodeListItem item={episode} showFull />;
};

export default Episode;
