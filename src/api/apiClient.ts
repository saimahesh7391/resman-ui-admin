// resman-ui-admin/src/api/apiClient.ts
import axios, { AxiosError } from 'axios';

interface ApiResponse<T = any> {
  apiMessageCode: string;
  apiMessage: string;
  httpCode: string;
  data: T[];
  error: string | null;
}

export const apiClient = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    'http://ec2-13-211-19-159.ap-southeast-2.compute.amazonaws.com:9092',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => {
    const apiResponse = response.data as ApiResponse;
    if (apiResponse.error) {
      return Promise.reject(new Error(apiResponse.error));
    }
    return response;
  },
  (error: AxiosError<ApiResponse>) => {
    const message =
      error.response?.data?.error ||
      error.response?.data?.apiMessage ||
      error.message ||
      'An unexpected error occurred';
    return Promise.reject(new Error(message));
  }
);