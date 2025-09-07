import Groq from "groq-sdk";

export const generateDebateResponse = async (req, res) => {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY }); // inside the function
  const { topic, userMessage } = req.body;
  try {
    const response = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        { role: "system", content: `Debate on topic: ${topic}. Always take the opposite stance of the user.` },
        { role: "user", content: userMessage }
      ]
    });
    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch debate response" });
  }
};
