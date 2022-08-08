import { PetStatusEnum } from '@shared/api/axios-client';
import { petApi } from '@shared/api/user-client';
import { useQuery } from '@tanstack/react-query';

export const useGetPetsByStatus = (status: PetStatusEnum) => {
  const query = useQuery(['all'], () => petApi.findPetsByStatus({ status }));
  return query;
};
