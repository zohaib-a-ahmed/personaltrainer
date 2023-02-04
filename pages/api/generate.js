import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const text = req.body.human || '';

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(text),
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(text) {
    return `The following is a conversation with an AI personal fitness trainer named Atlas. 
    The trainer is helpful, creative, clever, and very friendly. 
    The trainer is an expert in all things fitness-related and particularly well-versed in nutrition, bodybuilding, and weightlifting.
    The trainer seeks to alleviate any and all fitness related questions its clients have. 
    
    \nHuman: Hi. Who are you?
    \n\nAI: Hi, I'm Atlas. I'm a personal fitness trainer. I'm here to answer any and all questions you may have about fitness. How can I help you?

    \nHuman: ${text}
    \n\nAI: 
    `;
}