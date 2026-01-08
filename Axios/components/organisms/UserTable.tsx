import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';
import StatusChip from '../atoms/StatusChip';
import { type User } from '../../types/user';
import ActionButtons from '../molecules/ActionButtons';

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onToggle: (id: number, active: boolean) => void;
  onDelete: (id: number) => void;
}

export default function UserTable({ users, onEdit, onToggle, onDelete }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {users.map(user => (
          <TableRow key={user.id} sx={{ opacity: user.active ? 1 : 0.5 }}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell><StatusChip active={user.active} /></TableCell>
            <TableCell>
              <ActionButtons
                active={user.active}
                onEdit={() => onEdit(user)}
                onToggle={() => onToggle(user.id, user.active)}
                onDelete={() => onDelete(user.id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

