import axios from 'axios';

const API_KEY = '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';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

export default function generateText(prompt, length) {
  return axios.post(`${PROXY_URL}https://api.openai.com/v1/text/generate`, {
    model: 'text-davinci-002',
    prompt,
    length,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
}
