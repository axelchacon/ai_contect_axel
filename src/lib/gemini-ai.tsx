// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";

const apikey = `AIzaSyCYVDVDaLJSL7m5ZjkBX-1ba0pui9qxp-A`;
const genAI = new GoogleGenerativeAI(apikey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const generationConfig = {
	temperature: 1.0,
	responseMimeType: "text/plain",
	maxOutputTokens: 8192,
	topP: 0.95,
	topK: 64,
};

export const chatSession = model.startChat({
	generationConfig: generationConfig,
	history: [],
});
