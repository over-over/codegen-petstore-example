import {
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { ChevronRight, Pets } from '@mui/icons-material';
import styled from '@emotion/styled';

import { TPetInfo } from './types';

const PetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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
  const avatarImage = photoURL ? (
    <PetImage src={photoURL} alt={name} />
  ) : (
    <Pets />
  );

  return (
    <ListItemButton onClick={onClick} divider>
      <ListItemAvatar>
        <Avatar>{avatarImage}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={petInfo} />
      <ListItemIcon sx={{ minWidth: 24 }}>
        <ChevronRight />
      </ListItemIcon>
    </ListItemButton>
  );
};
