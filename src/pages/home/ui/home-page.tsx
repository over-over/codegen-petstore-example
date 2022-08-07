import { Container } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  petListSlot?: ReactNode;
};

export const HomePage = ({ petListSlot }: Props) => {
  return (
    <Container>
      {petListSlot}
    </Container>
  );
};
