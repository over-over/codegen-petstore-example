import { useQuery } from '@tanstack/react-query';

import { PetStatusEnum } from '@shared/api/axios-client';
import { petApi } from '@shared/api/user-client';

import { PET_QUERY_KEYS } from '../query-keys';

export const useGetPetsByStatus = (status: PetStatusEnum) => {
  const query = useQuery(PET_QUERY_KEYS.list(), () =>
    petApi.findPetsByStatus({ status }),
  );
  return query;
};
