import { Stack } from '@mui/material';
import AppButton from '../atoms/AppButton';

interface Props {
  active: boolean;
  onEdit: () => void;
  onToggle: () => void;
  onDelete: () => void;
}

export default function ActionButtons({ active, onEdit, onToggle, onDelete }: Props) {
  return (
    <Stack direction="row" spacing={1}>
      <AppButton size="small" variant="contained" onClick={onEdit}>
        Edit
      </AppButton>
      <AppButton size="small" variant="outlined" onClick={onToggle}>
        {active ? 'Disable' : 'Enable'}
      </AppButton>
      <AppButton size="small" variant="contained" color="error" onClick={onDelete}>
        Delete
      </AppButton>
    </Stack>
  );
}

