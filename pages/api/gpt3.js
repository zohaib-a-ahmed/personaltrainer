// pages/api/gpt3.js
export default (req, res) => {
    const apiKey = req.body.apiKey;
    process.env.OPENAI_API_KEY = apiKey;
    res.status(200).json({ success: true });
  };
  