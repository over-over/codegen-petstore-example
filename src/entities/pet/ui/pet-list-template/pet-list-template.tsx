import { ReactNode } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

type Props = { children?: ReactNode };

export const PetListTemplate = ({ children }: Props) => {
  return (
    <Card elevation={0} variant="outlined">
      <CardContent>
        <Typography variant="h4" mb={3}>
          Pet list
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};
