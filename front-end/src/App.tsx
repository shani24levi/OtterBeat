import React, { Suspense, lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useNavigate,
} from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './shared/ErrorFallback ';
import SkeletonAdmin from './shared/skeletons/SkeletonAdmin';

// pages
import { Albums, Home, RootLayout, PrivetRootLayout } from './pages';

const Favorites = lazy(() => import('./pages/Favorites'));

const App: React.FC = (): JSX.Element => {
  // const navigate = useNavigate();

  //react-router-dom version 6
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        {/* <Route path="/favorites" lazy={() => import("./pages/Favorites")} /> */}
        <Route path="/favorites" element={<Favorites />} />

        <Route
          path="admin"
          element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => console.log('navigat')} //navigate('/')}
            >
              <Suspense fallback={<SkeletonAdmin />}>
                <Favorites />
              </Suspense>
            </ErrorBoundary>
          }
        />

        {/* <Route path="/favorites" element={<PrivetRootLayout />}>
        <Route path="/favorites" element={<Favorites />} />
      </Route> */}

        <Route path="/*" element={<>Not Found 404!</>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
