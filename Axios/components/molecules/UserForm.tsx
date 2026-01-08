import { Stack, Select, MenuItem } from '@mui/material';
import AppInput from '../atoms/AppInput';
import AppButton from '../atoms/AppButton';

interface Props {
  form: { name: string; email: string; role: string };
  editing: boolean;
  onChange: (key: string, value: string) => void;
  onSubmit: () => void;
}

export default function UserForm({ form, editing, onChange, onSubmit }: Props) {
  return (
    <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
      <AppInput
        label="Name"
        value={form.name}
        onChange={e => onChange('name', e.target.value)}
      />
      <AppInput
        label="Email"
        value={form.email}
        onChange={e => onChange('email', e.target.value)}
      />
      <Select
        value={form.role}
        onChange={e => onChange('role', e.target.value)}
        fullWidth
      >
        <MenuItem value="User">User</MenuItem>
        <MenuItem value="Admin">Admin</MenuItem>
      </Select>

      <AppButton
        variant="contained"
        color={editing ? 'warning' : 'success'}
        onClick={onSubmit}
      >
        {editing ? 'Update' : 'Add'}
      </AppButton>
    </Stack>
  );
}

