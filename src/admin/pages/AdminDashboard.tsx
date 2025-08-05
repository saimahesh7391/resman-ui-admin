// resman-ui-admin/src/admin/pages/AdminDashboard.tsx
import { useState, useEffect } from 'react';
import { adminService } from '@/api/adminService';

interface User {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await adminService.getUsers();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    fetchUsers();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>
            {user.firstName} {user.lastName} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;