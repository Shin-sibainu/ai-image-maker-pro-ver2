import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});
