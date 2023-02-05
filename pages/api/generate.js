import { Configuration, OpenAIApi } from "openai";

/*
Make openAI API Call
*/
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const baseConversation = `The following is a conversation with an AI personal fitness trainer named Atlas. 
The trainer is helpful, creative, clever, and very friendly. 
The trainer is an expert in all things fitness-related and particularly well-versed in nutrition, bodybuilding, and weightlifting.
The trainer seeks to alleviate any and all fitness related questions its clients have. 

\nHuman: Hi. Who are you?
\n\nAI: Hi, I'm Atlas. I'm a personal fitness trainer. I'm here to answer any and all questions you may have about fitness. How can I help you?

\nHuman:`

process.env.CONVERSATION = baseConversation;

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const conversation = process.env.CONVERSATION;
  const text = req.body.human || '';

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(text),
      temperature: 0.9,
      max_tokens: 300,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    process.env.CONVERSATION += completion.data.choices[0].text + `\nHuman: `;
    res.status(200).json({ result: completion.data.choices[0].text });
  } 
  catch(error) {
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

    process.env.CONVERSATION += text + '\n\nAI:';

    return process.env.CONVERSATION;
}