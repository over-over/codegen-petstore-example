import { Container } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const App = ({ children }: Props) => {
  return (
    <Container sx={{ display: 'flex', height: '100vh', width: '100%' }}>
      {children}
    </Container>
  );
};
