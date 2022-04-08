import { Layout } from 'features/layout';
import { Outlet } from 'react-router-dom';

export const LayoutPage = () => (
  <Layout>
    <Outlet />
  </Layout>
);
