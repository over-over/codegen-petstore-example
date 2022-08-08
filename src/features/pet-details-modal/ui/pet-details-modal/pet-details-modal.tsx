import { ModalTemplate } from '@shared/ui';

import { PetDetailsCard } from '../pet-details-card';
import { TPetDetails } from '../pet-details-card/types';

type Props = {
  isFetchingDeletion?: boolean;
  petDetails: TPetDetails;
  isOpen?: boolean;
  onClose: () => void;
  onDeletePet: () => void;
};

export const PetDetailsModal = ({
  isFetchingDeletion,
  petDetails,
  isOpen,
  onClose,
  onDeletePet,
}: Props) => {
  return (
    <ModalTemplate isOpen={isOpen} maxWidth={420} onClose={onClose}>
      <PetDetailsCard
        {...petDetails}
        onDelete={onDeletePet}
        isDeleting={isFetchingDeletion}
      />
    </ModalTemplate>
  );
};
