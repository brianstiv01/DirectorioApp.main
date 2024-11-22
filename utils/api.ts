import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export const api = axios.create({
  baseURL: API_URL,
});

export const fetchServices = async (category: string) => {
  const response = await api.get(`/services?category=${category}`);
  return response.data;
};

export const fetchCompanyDetails = async (companyId: string) => {
  const response = await api.get(`/companies/${companyId}`);
  return response.data;
};