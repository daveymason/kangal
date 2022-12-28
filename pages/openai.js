import axios from 'axios';

const API_KEY = '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';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

export default async function generateText(prompt, length) {
  try {
    const response = await axios.post(`${PROXY_URL}https://api.openai.com/v1/text/generate`, {
      model: 'text-davinci-002',
      prompt,
      length,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Handle 404 error
      console.error('Resource not found');
      return {};
    }
    throw error;
  }
}