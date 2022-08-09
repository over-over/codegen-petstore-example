import { Pet } from '@shared/api/axios-client';
import { TPetDetails } from '@features/pet-details-modal/ui/pet-details-card/types';

type Params = {
  id?: number;
  pets?: Pet[];
};

export const getPetDetailsById = ({ id, pets }: Params) => {
  if (!id || !pets || pets.length === 0) {
    return undefined;
  }

  const selectedPet = pets.find(item => item.id === id);
  if (!selectedPet) {
    return undefined;
  }

  const petTags =
    selectedPet.tags?.reduce((acc, item) => {
      if (item.name) {
        acc.push(item.name);
      }
      return acc;
    }, [] as string[]) ?? [];

  const photoURL = selectedPet.photoUrls?.find(link => {
    try {
      new URL(link);
      return true;
    } catch {
      return false;
    }
  });

  const result: TPetDetails = {
    id: selectedPet.id ?? 0,
    name: selectedPet.name,
    photoURL,
    category: selectedPet.category?.name ?? 'N/A',
    status: selectedPet.status ?? 'N/A',
    tags: petTags,
  };
  return result;
};
