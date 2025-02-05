import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from './routes/routes';
import PageTemplate from './components/PageTemplate';

function App() {
  return (
    <PageTemplate>
      <Routes>
        {routes.map(({ path, element: Page }, index) => (
          <Route key={index} path={path} element={<Page />} />
        ))}
      </Routes>
    </PageTemplate>
  );
}

export default App;
