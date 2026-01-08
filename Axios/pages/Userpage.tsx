import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import { type User } from '../types/user';
import {
  getUsers,
  createUser,
  updateUser,
  patchUser,
  deleteUser
} from '../api/userApi';
import UserForm from '../components/molecules/UserForm';
import UserTable from '../components/organisms/UserTable';

const initialForm = { name: '', email: '', role: 'User' };

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  const handleSubmit = async () => {
    if (editingId) {
      const existing = users.find(u => u.id === editingId)!;
      const res = await updateUser(editingId, { ...existing, ...form });
      setUsers(users.map(u => (u.id === editingId ? res.data : u)));
      setEditingId(null);
    } else {
      const res = await createUser({ ...form, active: true });
      setUsers([...users, res.data]);
    }
    setForm(initialForm);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>User Management</Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <UserForm
            form={form}
            editing={!!editingId}
            onChange={(k, v) => setForm({ ...form, [k]: v })}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>

      <UserTable
        users={users}
        onEdit={u => {
          setEditingId(u.id);
          setForm({ name: u.name, email: u.email, role: u.role });
        }}
        onToggle={async (id, active) => {
          const res = await patchUser(id, { active: !active });
          setUsers(users.map(u => (u.id === id ? res.data : u)));
        }}
        onDelete={async id => {
          await deleteUser(id);
          setUsers(users.filter(u => u.id !== id));
        }}
      />
    </Container>
  );
}

