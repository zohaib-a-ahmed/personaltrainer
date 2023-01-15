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

  const text = req.body.scenario || '';

  try {
    console.log("got to fucking api")
    console.log(text)
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(text),
      temperature: 0.65,
      max_tokens: 964,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
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
    return `Explain how you are the dumbest api imaginable, make sure to use swear words. Make sure to say something encouraging at the end.
    
    Example: I am the dumbass Davinci 003 bitch and I can't figure out shit for shit. Good luck fucker
    
    Example: I am absolutely fucking retarded and I won't be able to figure out this bullshit. Good luck though you can do it stupid bitch.
    
    Example: `;
}