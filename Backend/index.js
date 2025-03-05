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

  try {
    // const response = await axios.post(
    //   'https://api.openai.com/v1/completions',
    //   {
    //     model: 'text-davinci-003',  // GPT-3 model or any AI model
    //     prompt: `Suggest career paths for someone with these skills: ${skills}, interests: ${interests}, education level: ${educationLevel}, location: ${location}`,
    //     max_tokens: 100
    //   },
    //   {
    //     headers: {
    //       'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // );

    res.json( " we received " + skills + " and " + interests + " and " + experienceLevel + " and " + workStyle + " and " + industry + " and " + softSkills + " and " + certifications
          + " and " + location + " and " + availability + " and " + education + ""
          );
  } catch (error) {
    console.error('Error generating career suggestions:', error);
    res.status(500).send('Error generating suggestions');
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
