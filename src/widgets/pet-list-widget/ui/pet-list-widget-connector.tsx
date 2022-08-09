import { useState } from 'react';

import { getPetListData, useGetPetsByStatus } from '@entities/pet';
import { PetList } from '@entities/pet/ui';
import { PetDetailsModal } from '@features/pet-details-modal';
import { useDeletePet } from '@features/pet-details-modal/model/hooks/use-delete-pet';
import { getPetDetailsById } from '@features/pet-details-modal/model/mappers/get-pet-details-by-id';

type Props = {};

export const PetListWidgetConnector = ({}: Props) => {
  const [selectedPetId, setSelectedPetId] = useState<number | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError } = useGetPetsByStatus('available');
  const { mutateAsync, isLoading: isFetchingDeletion } = useDeletePet();

  const items = getPetListData(data?.data) ?? [];
  const selectedPetDetails = getPetDetailsById({
    id: selectedPetId,
    pets: data?.data,
  });

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onDeletePet = () => {
    if (selectedPetId) {
      mutateAsync(selectedPetId, {
        onSettled: () => {
          setIsModalOpen(false);
        },
      });
    }
  };

  const onClickPet = (id: number) => {
    setSelectedPetId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <PetDetailsModal
        isOpen={isModalOpen}
        petDetails={selectedPetDetails}
        onClose={onCloseModal}
        onDeletePet={onDeletePet}
        isFetchingDeletion={isFetchingDeletion}
      />
      <PetList
        items={items}
        isLoading={isLoading}
        hasError={isError}
        onClick={onClickPet}
      />
    </>
  );
};
