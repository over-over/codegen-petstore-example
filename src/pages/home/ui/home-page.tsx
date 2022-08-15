import { ReactNode } from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material';
import styled from '@emotion/styled';

import { PageTemplate } from '@shared/ui';

const PageWrapper = styled(PageTemplate)`
  overflow: auto;
`;

type Props = {
  petListSlot?: ReactNode;
};

export const HomePage = ({ petListSlot }: Props) => {
  return (
    <PageWrapper>
      <Container maxWidth="sm" sx={{ px: 3, pt: 3, pb: 6 }}>
        <Typography variant="h2" fontWeight={700}>
          Petstore
        </Typography>
        <Typography mb={4} variant="h5" color="text.secondary">
          React Query and OpenAPI generator demo
        </Typography>
        {petListSlot}
      </Container>
    </PageWrapper>
  );
};
