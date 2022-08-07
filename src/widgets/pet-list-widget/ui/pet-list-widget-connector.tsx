import { getPetListData, useGetPetsByStatus } from '@entities/pet';
import { PetList } from '@entities/pet/ui';

type Props = {};

export const PetListWidgetConnector = ({}: Props) => {
  const { data, isLoading, isError } = useGetPetsByStatus('available');
  const items = getPetListData(data?.data) ?? [];
  return (
    <PetList
      items={items}
      isLoading={isLoading}
      hasError={isError}
      onClick={() => {}}
    />
  );
};
