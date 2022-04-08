import 'shared/styles/fonts.css';
import 'shared/styles/colors.css';
import styles from './app.module.css';
import { AppProviders } from './app-providers';
import { useTheme } from 'features/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutPage } from 'pages/layout';
import { ResultsPage } from 'pages/results';
import { CountryPage } from 'pages/country';
import { NotFound } from 'features/misc';
import { ChallengeAttribution } from 'features/misc';

export const App = () => (
  <AppProviders>
    <AppConsumer />
  </AppProviders>
);

const AppConsumer = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === 'light' ? styles.applight : styles.appdark}>
      <BrowserRouter>
        <Routes>
          <Route path={process.env.PUBLIC_URL} element={<LayoutPage />}>
            <Route index element={<ResultsPage />} />
            <Route path="search/:query" element={<ResultsPage />} />
            <Route path="country/:code" element={<CountryPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ChallengeAttribution />
    </div>
  );
};
