import { ThemeProvider } from '@shared/ui';

import { App } from './app';

export const AppConnector = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};
