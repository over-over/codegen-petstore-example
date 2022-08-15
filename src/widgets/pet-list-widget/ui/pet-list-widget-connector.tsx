import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import {
  getPetListData,
  useGetPetsByStatus,
  PetList,
  PET_QUERY_KEYS,
} from '@entities/pet';
import {
  PetDetailsModal,
  getPetDetailsById,
  useDeletePet,
} from '@features/pet-details-modal';

export const PetListWidgetConnector = () => {
  const [selectedPetId, setSelectedPetId] = useState<number | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

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
          queryClient.invalidateQueries(PET_QUERY_KEYS.list());
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
