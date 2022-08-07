import { Card, CardContent, List, Typography } from '@mui/material';
import { PetListItem } from '../pet-list-item';

import { TPetData } from '../pet-list-item/types';

type Props = {
  items: TPetData[];
  onClick: (id: string) => void;
};

export const PetList = ({ items, onClick }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" mb={3}>
          Pet list
        </Typography>
        <List>
          {items.map(pet => (
            <PetListItem
              key={pet.id}
              {...pet}
              onClick={() => onClick(pet.id)}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
