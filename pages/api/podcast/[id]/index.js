import { podcasts } from "utils/mockData";

export default function handler(req, res) {
  const { id } = req.query;
  const podcast = podcasts.find((p) => p.id === parseInt(id));
  res.status(200).json(podcast);
}
