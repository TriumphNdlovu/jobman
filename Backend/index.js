const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const multer = require("multer");
const pdfParse = require("pdf-parse");

dotenv.config();

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json()); // to parse JSON bodies
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", 'https://jobman-tfev.onrender.com'],
        connectSrc: ["'self'", 'https://generativelanguage.googleapis.com'],
      },
    },
  })
);


const PORT = process.env.PORT || 5000;
 const { GoogleGenerativeAI } = require('@google/generative-ai');

  const apiKey = process.env.GOOGLE_STUDIO_ID;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
  });

  const generationConfig = {
    temperature: 0.7,
    topP: 0.9,
    topK: 50,
    maxOutputTokens:512,
  };
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
    highestQualification,
  } = req.body;

 

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(
      `I need career suggestions based on the following details:

      - Full Name: ${fullName}
      - Skills: ${skills}
      - Interests: ${interests}
      - Experience Level: ${experienceLevel} (e.g., Entry Level, Mid Level, Senior Level)
      - Education Level: ${educationLevel} (e.g., High School, Bachelor's Degree, Master's Degree, PhD)
      - Soft Skills: ${softSkills} (e.g., Communication, Leadership)
      - Certifications: ${certifications} (e.g., PMP, AWS)
      - highestQualification: ${highestQualification} (e.g., BSC Computer Science, MSC Computer Science)

      Respond ONLY with a JSON array, like this:

      [
        {
          "role": "Role Title",
          "description": "A brief description of the role and its key responsibilities.",
          "whyItFits": "Why this role aligns with my skills, experience, education, and interests."
        }
      ]

      Your entire response should start with [ and end with ]. No additional comments, explanations, or headers.`
    );

    console.log('Full AI response:', result);

    const textResult = result.response.candidates[0]?.content?.parts[0]?.text;

    console.log('Extracted text:', textResult);

    let careerSuggestions = [];

    if (textResult) {
      // Clean up markdown-style code block if present
      const cleanJson = textResult.replace(/^```json\s*/, '').replace(/```$/, '');

      try {
        careerSuggestions = JSON.parse(cleanJson); // Parse the cleaned JSON string
      } catch (parseError) {
        console.error('Failed to parse AI response:', parseError);
        return res.status(500).json({ error: 'Invalid JSON format in AI response' });
      }
    } else {
      console.error('No valid JSON array found in AI response.');
    }

    res.json({ careerSuggestions });
  } catch (error) {
    console.error('Failed to get career suggestions:', error);
    res.status(500).json({ error: 'Failed to get career suggestions' });
  }
});


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// The CV Scoring 
app.post("/cvupload", upload.single("cv"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const text = await pdfParse(req.file.buffer);
    const content = text.text.toLowerCase();

    const prompt = `Here is a parsed text of my CV:\n\n${content}\n\nPlease give me an ATS score based on industry standards. Respond ONLY with a JSON object like this:

    {
      "score": 85,
      "feedback": "Your CV has strong technical keywords but could improve formatting and readability."
    }
     Your entire response should start with { and end with }. No additional comments, explanations, or headers.
     Please make sure of that it is very critical
    `;

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
    });

    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const textResult = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    console.log("testing: " + textResult);

    let parsedResponse;
    try {
      parsedResponse = JSON.parse(textResult.replace(/^```json\s*/, '').replace(/```$/, ''));
    } catch (err) {
      console.error("Invalid AI response format:", err);
      return res.status(500).json({ error: "AI returned an invalid response" });
    }

    res.status(200).json(parsedResponse);
  } catch (err) {
    console.error("Error analyzing CV:", err);
    res.status(500).json({ error: "Error analyzing CV" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
