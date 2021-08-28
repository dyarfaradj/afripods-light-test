import PodcastListItem from "../../components/PodcastListItem";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/podcast");
  const podcasts = await res.json();

  const paths = podcasts.map((podcast) => ({
    params: { id: podcast.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/podcast/${params.id}`);
  const podcast = await res.json();

  return { props: { podcast } };
}

const Podcast = ({ podcast }) => {
  return <PodcastListItem item={podcast} />;
};

export default Podcast;
