import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from './routes/routes';
import PageTemplate from './components/PageTemplate';

function App() {
  const theme = useSelector((state) => state.global.theme);

  return (
    <div data-theme={theme}>
      <PageTemplate>
        <Routes>
          {routes.map(({ path, element: Page }, index) => (
            <Route key={index} path={path} element={<Page />} />
          ))}
        </Routes>
      </PageTemplate>
    </div>
  );
};

export default App;
