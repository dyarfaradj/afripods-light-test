import { podcasts } from "utils/mockData";

export default (req, res) => {
  res.status(200).json(podcasts);
};
