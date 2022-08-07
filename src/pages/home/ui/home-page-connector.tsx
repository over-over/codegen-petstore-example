import { PetListWidgetConnector } from '@widgets/pet-list-widget';

import { HomePage } from './home-page';

export const HomePageConnector = () => {
  return <HomePage petListSlot={<PetListWidgetConnector />} />;
};
