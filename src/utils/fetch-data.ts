import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

const fetchData = async (endpoint: string, code?: string) => {
  if (!code) {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  }
  const response = await axios.post(
    `${BASE_URL}/${endpoint}`,
    { code },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data;
};

export const fetchLexicalData = async (code: string) => {
  return fetchData('check', code);
};

export const fetchSyntacticData = async (code: string) => {
  return fetchData('symbol_table', code);
};
