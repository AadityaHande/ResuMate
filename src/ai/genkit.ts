import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI({
    apiKey: 'AIzaSyDdPMouKlWE6Zvv5zt4y7aYTc6avkw-QXE'
  })],
  model: 'googleai/gemini-2.5-flash',
});
