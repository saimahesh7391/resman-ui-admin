// resman-ui-admin/src/api/adminService.ts
import { apiClient } from './apiClient';

interface User {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AdminApiResponse {
  apiMessageCode: string;
  apiMessage: string;
  httpCode: string;
  data: User[];
  error: string | null;
}

export const adminService = {
  async getUsers(): Promise<User[]> {
    try {
      const response = await apiClient.get<AdminApiResponse>('/api/admin/users');
      return response.data.data;
    } catch (error) {
      throw new Error((error as Error).message || 'Failed to fetch users');
    }
  },
};