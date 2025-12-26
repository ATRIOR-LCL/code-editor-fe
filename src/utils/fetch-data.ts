import axios from 'axios';

const BASE_URL = 'http://frp.coolarec.link';

const fetchData = async (endpoint: string, code?: string, input?: string) => {
  if (!input) {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, { code });
    return response.data;
  }

  const response = await axios.post(`${BASE_URL}/${endpoint}`, { code, input_str: input });
  return response.data;
};

export const fetchLexicalData = async (code: string) => {
  return fetchData('check', code);
};

export const fetchSyntacticData = async (code: string) => {
  return fetchData('symbol_table', code);
};

export const fetchSemanticAndIntermediateCodeData = async (code: string) => {
  return fetchData('pcode', code);
};

export const fetchSyntaticTreeData = async (code: string) => {
  return fetchData('ast', code);
};

export const fetchAsmCodeData = async (code: string) => {
  return fetchData('asm', code);
};

export const fetchRunCodeData = async (code: string, input: string) => {
  return fetchData('run', code, input);
};

export const fetchOptimizedAsmCodeData = async (code: string) => {
  return fetchData('optimize', code);
}
