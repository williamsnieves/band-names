import { Configuration, OpenAIApi } from "openai";
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function generateNames({ genre, language, amount }) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Give me ideas of ${amount} names for bands of type ${genre} in ${language}, please write them in a single line and separated by comma`,
    temperature: 0.4,
    max_tokens: 4000,
  });

  return completion?.data.choices[0].text;
}
