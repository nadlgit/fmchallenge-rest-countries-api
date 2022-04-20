import 'shared/styles/fonts.css';
import 'shared/styles/colors.css';
import styles from './app.module.css';
import { AppProviders } from './app-providers';
import { useTheme } from 'features/theme';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LayoutPage } from 'pages/layout';
import { ResultsPage } from 'pages/results';
import { CountryPage } from 'pages/country';
import { NotFound } from 'features/misc';
import { ChallengeAttribution } from 'features/misc';

export const App = () => (
  <HashRouter>
    <AppProviders>
      <AppConsumer />
    </AppProviders>
  </HashRouter>
);

const AppConsumer = () => {
  const { theme } = useTheme();
  return (
    <div className={`${styles.app} ${theme === 'light' ? styles.light : styles.dark}`}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<ResultsPage />} />
          <Route path="search/:query" element={<ResultsPage />} />
          <Route path="country/:code" element={<CountryPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ChallengeAttribution />
    </div>
  );
};
