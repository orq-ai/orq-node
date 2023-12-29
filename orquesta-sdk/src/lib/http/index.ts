import axios, { AxiosInstance } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://preview.orquesta.cloud/v2',
});

// Create a function that allow to create an http request with axios
export async function createHttpRequest<T extends { [key: string]: any }>({
  method,
  url,
  apiKey,
  data,
}: {
  method: string;
  url: string;
  apiKey: string;
  data?: T;
}) {
  return axiosInstance({
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    ...(data && { data }),
    ...(data?.['stream'] && { responseType: 'stream' }),
  });
}