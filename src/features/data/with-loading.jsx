import { LoadingFallback, ErrorFallback } from 'features/misc';

export const withLoading =
  (WrappedComponent) =>
  ({ LoadingComponent = LoadingFallback, isLoading, error, ...props }) => {
    if (isLoading) return <LoadingComponent />;
    if (error) return <ErrorFallback error={error} />;
    return <WrappedComponent {...props} />;
  };
