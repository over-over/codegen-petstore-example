import { CircularProgress, List, Typography } from '@mui/material';

import { PetListItem } from '../pet-list-item';
import { PetListTemplate } from '../pet-list-template';
import { TPetData } from '../pet-list-item/types';

type Props = {
  items: TPetData[];
  isLoading?: boolean;
  hasError?: boolean;
  onClick: (id: number) => void;
};

export const PetList = ({ items, isLoading, hasError, onClick }: Props) => {
  if (isLoading) {
    return (
      <PetListTemplate>
        <CircularProgress
          sx={{ flex: 1, m: 'auto' }}
          size={48}
          color="primary"
        />
      </PetListTemplate>
    );
  }
  if (hasError) {
    return (
      <PetListTemplate>
        <Typography variant="body1">Failed to get pets</Typography>
      </PetListTemplate>
    );
  }

  return (
    <PetListTemplate>
      <List>
        {items.map(pet => (
          <PetListItem key={pet.id} {...pet} onClick={() => onClick(pet.id)} />
        ))}
      </List>
    </PetListTemplate>
  );
};
