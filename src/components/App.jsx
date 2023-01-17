import { Suspense, useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelectors';
import SharedLayout from './SharedLayout';

const StartPage = lazy(() => import('pages/StartPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
const WalletPage = lazy(() => import('pages/WalletPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const PrivateRoute = ({ component }) => {
    return !isAuth ? <Navigate to="/" /> : component;
  };

  const PublicRoute = ({ component }) => {
    return isAuth ? <Navigate to="/wallet" /> : component;
  };

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PublicRoute component={<StartPage />} />} />
          <Route
            path="register"
            element={<PublicRoute component={<StartPage registrate />} />}
          />
          <Route
            path="wallet"
            element={<PrivateRoute component={<WalletPage />} />}
          />
          <Route
            path="statistics"
            element={<PrivateRoute component={<StatisticsPage />} />}
          />
          <Route
            path="*"
            element={<Navigate to={isAuth ? '/wallet' : '/'} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
