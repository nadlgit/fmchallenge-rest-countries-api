export const withLoading =
  (WrappedComponent) =>
  ({ isLoading, error, ...props }) => {
    if (isLoading) return <h1>Loading</h1>;
    if (error) return <h1>Error: {error?.message}</h1>;
    return <WrappedComponent {...props} />;
  };
