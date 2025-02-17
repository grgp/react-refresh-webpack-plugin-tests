import { useState } from 'react';
import ChatModal from '../components/ChatModal';

const AdminPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'Editor' },
    { id: 3, name: 'Bob Johnson', role: 'Viewer' },
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <div style={{ marginTop: '20px' }}>
        <h2>Users</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '10px', borderBottom: '2px solid #ddd' }}>ID</th>
              <th style={{ textAlign: 'left', padding: '10px', borderBottom: '2px solid #ddd' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '10px', borderBottom: '2px solid #ddd' }}>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.id}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.name}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ChatModal />
    </div>
  );
};

export default AdminPage;