import { Configuration, OpenAIApi } from "openai";
require("dotenv").config();

console.log(process.env.OPENAI_API_KEY);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function getBandNames(req, res) {
  const { genre, language, amount } = req.query;
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Give me ideas of ${amount} names for bands of type ${genre} in ${language}, please write them in a single line and separated by comma`,
      temperature: 0.4,
      max_tokens: 4000,
    });
    res.status(200);
    res.json({ response: completion?.data.choices[0].text });
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
}
