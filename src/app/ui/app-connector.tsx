import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@shared/ui';
import { HomePageConnector } from '@pages/home';

import { App } from './app';

const queryClient = new QueryClient();

export const AppConnector = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App>
          <HomePageConnector />
        </App>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
