import { TPetData } from '@entities/pet/ui/pet-list-item/types';
import { Pet } from '@shared/api/axios-client';

export const getPetListData = (data?: Pet[]) => {
  if (!data) {
    return undefined;
  }

  const result: TPetData[] = data.map(item => {
    const photoURL = item.photoUrls?.find(link => {
      try {
        new URL(link);
        return true;
      } catch {
        return false;
      }
    });

    return {
      id: item.id ?? -1,
      name: item.name || '—',
      category: item.category?.name || 'N/A',
      status: item.status || 'N/A',
      photoURL,
    };
  });
  return result;
};
