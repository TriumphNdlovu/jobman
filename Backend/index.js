const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());  // to parse JSON bodies

const PORT = process.env.PORT || 5000;

// Example endpoint for career suggestions
app.post('/career-suggestions', async (req, res) => {
  const {
    fullName,
    skills,
    interests,
    experienceLevel,
    educationLevel,
    softSkills,
    certifications,
  } = req.body;

  const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");

  const apiKey = process.env.GOOGLE_STUDIO_ID;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(
      `I need help with career suggestions based on the following details:

      - **Full Name**: ${fullName}
      - **Skills**: ${skills}
      - **Interests**: ${interests}
      - **Experience Level**: ${experienceLevel} (e.g., Entry Level, Mid Level, Senior Level)
      - **Education Level**: ${educationLevel} (e.g., High School, Bachelor's Degree, Master's Degree, PhD)
      - **Soft Skills**: ${softSkills} (e.g., Communication, Leadership)
      - **Certifications**: ${certifications} (e.g., PMP, AWS)

      Please provide a list of career suggestions that match my profile. Consider my skills, experience level, education, soft skills, and certifications in your suggestions.`
    );



    res.json({
      careerSuggestions: result.response.text,
    });
  } catch (error) {
    console.error("Error generating career suggestions:", error);
    res.status(500).json({ error: "Failed to generate career suggestions" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
