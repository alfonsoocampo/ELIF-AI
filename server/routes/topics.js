import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
import express from 'express';

const router = express.Router();

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }
// // Test route
// router.get('/', (req, res) => {
//   res.json({ message: 'Topics route is working!' });
// }); // reaches path root/topics

// router.post('/response', (req, res) => {
//   console.log(req.body);
//   res.json({ success: true, message: 'Response received' });
// }); // reaches path root/topics/response

