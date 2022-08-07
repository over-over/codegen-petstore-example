import {
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import { Pets } from '@mui/icons-material';

import { TPetInfo } from './types';

type Props = TPetInfo & {
  onClick: () => void;
};

export const PetListItem = ({
  photoURL,
  name,
  category,
  status,
  onClick,
}: Props) => {
  const petInfo = `Category: "${category}", status: "${status}"`;
  const avatarImage = photoURL ? <img src={photoURL} alt={name} /> : <Pets />;

  return (
    <ListItemButton onClick={onClick} divider>
      <ListItemAvatar>
        <Avatar>{avatarImage}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={petInfo} />
    </ListItemButton>
  );
};
