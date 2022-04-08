import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'features/misc';
import { ThemeProvider } from 'features/theme';

export const AppProviders = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ThemeProvider>{children}</ThemeProvider>
  </ErrorBoundary>
);
