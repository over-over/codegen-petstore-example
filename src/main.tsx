import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { AppConnector } from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppConnector />
  </StrictMode>,
);
