import { episodes } from "utils/mockData";

export default function handler(req, res) {
  const { id } = req.query;
  const episodeList = episodes.filter((p) => p.podcast.id === parseInt(id));
  res.status(200).json(episodeList);
}
