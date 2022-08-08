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
      <Container sx={{ px: 3, pt: 3, pb: 6 }}>
        <Card elevation={0} variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5">
              Welcome to React Query + opeanapitools codegen demo!
            </Typography>
          </CardContent>
        </Card>
        {petListSlot}
      </Container>
    </PageWrapper>
  );
};
