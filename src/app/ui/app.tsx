import {
  Button,
  Card,
  CardContent,
  Link,
  Paper,
  Stack,
  Typography,
  Container,
} from '@mui/material';
import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Container sx={{ display: 'flex', height: '100vh', width: '100%' }}>
      <Card
        sx={theme => ({
          margin: 'auto',
          backgroundColor: theme.palette.background.default,
          borderRadius: 2,
        })}
        elevation={3}
      >
        <CardContent>
          <Stack direction="column" spacing={2} alignItems="center">
            <Link href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" alt="Vite logo" />
            </Link>
            <Typography variant="h1">Vite + React</Typography>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => setCount(count => count + 1)}
              >
                count is {count}
              </Button>
              <Typography variant="body1">
                Edit <code>src/App.tsx</code> and save to test HMR
              </Typography>
            </Paper>
            <Typography variant="subtitle2">
              Click on the Vite and React logos to learn more
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};
