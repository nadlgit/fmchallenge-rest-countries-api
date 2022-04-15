import { LoadingFallback, ErrorFallback } from 'features/misc';

export const withLoading =
  (WrappedComponent) =>
  ({ isLoading, error, ...props }) => {
    if (isLoading) return <LoadingFallback />;
    if (error) return <ErrorFallback error={error} />;
    return <WrappedComponent {...props} />;
  };
