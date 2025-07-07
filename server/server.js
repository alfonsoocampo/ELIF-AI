import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
const app = express();

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }
  
// main();

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.post('/topic', (req, res) => {
  console.log(req.body);
  res.json({ success: true, message: 'Data received' });

});

app.get('/test', async (req, res) => {
   const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});