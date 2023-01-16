import charities from "../../data/charities";

export default function handler(req, res) {
  res.status(200).json(charities);
}
