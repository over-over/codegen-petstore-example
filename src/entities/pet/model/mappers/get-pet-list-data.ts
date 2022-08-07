import { TPetData } from '@entities/pet/ui/pet-list-item/types';
import { Pet } from '@shared/api/axios-client';

export const getPetListData = (data?: Pet[]) => {
  if (!data) {
    return undefined;
  }

  const result: TPetData[] = data.map(item => ({
    id: String(item.id),
    name: item.name,
    category: item.category?.name ?? 'N/A',
    status: item.status ?? 'N/A',
    photoURL: item.photoUrls.find(item => item),
  }));
  return result;
};
