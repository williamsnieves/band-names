import { generateNames } from "../services/band-names-generator";

export async function getBandNames(req, res) {
  const { genre, language, amount } = req.query;
  try {
    const response = await generateNames({ genre, language, amount });
    res.status(200);
    res.json({ response });
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
}
