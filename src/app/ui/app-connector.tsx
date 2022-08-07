import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@shared/ui';

import { App } from './app';

const queryClient = new QueryClient();

export const AppConnector = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
