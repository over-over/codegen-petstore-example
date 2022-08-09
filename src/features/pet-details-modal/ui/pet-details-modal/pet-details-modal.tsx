import { Card, CardContent, Typography } from '@mui/material';
import { ModalTemplate } from '@shared/ui';

import { PetDetailsCard } from '../pet-details-card';
import { TPetDetails } from '../pet-details-card/types';

type Props = {
  isFetchingDeletion?: boolean;
  petDetails?: TPetDetails;
  isOpen?: boolean;
  onClose: () => void;
  onDeletePet: (id: number) => void;
};

export const PetDetailsModal = ({
  isFetchingDeletion,
  petDetails,
  isOpen,
  onClose,
  onDeletePet,
}: Props) => {
  if (!petDetails) {
    return (
      <ModalTemplate isOpen={isOpen} maxWidth={420} onClose={onClose}>
        <Card elevation={0} variant="outlined">
          <CardContent>
            <Typography>No info</Typography>
          </CardContent>
        </Card>
      </ModalTemplate>
    );
  }

  const onDelete = () => {
    onDeletePet(petDetails.id);
  };

  return (
    <ModalTemplate isOpen={isOpen} maxWidth={420} onClose={onClose}>
      <PetDetailsCard
        {...petDetails}
        onDelete={onDelete}
        isDeleting={isFetchingDeletion}
      />
    </ModalTemplate>
  );
};
