import { useMutation } from '@tanstack/react-query';

import { petApi } from '@shared/api/user-client';

export const useDeletePet = () => {
  const mutation = useMutation((petId: number) => petApi.deletePet({ petId }));
  return mutation;
};
