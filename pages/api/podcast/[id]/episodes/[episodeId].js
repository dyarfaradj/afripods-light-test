import { episodes } from "utils/mockData";

export default function handler(req, res) {
  const { id, episodeId } = req.query;
  const episode = episodes.find(
    (p) => p.podcast.id === parseInt(id) && p.id === parseInt(episodeId)
  );
  res.status(200).json(episode);
}
