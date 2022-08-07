import { ReactNode } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

type Props = { children?: ReactNode };

export const PetListTemplate = ({ children }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" mb={3}>
          Pet list
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};
