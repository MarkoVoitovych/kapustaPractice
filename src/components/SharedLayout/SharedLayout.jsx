import UserMenu from 'components/UserMenu';
import React from 'react';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom/dist';
import { selectIsAuth } from 'redux/auth/authSelectors';

function SharedLayout() {
  const isAuth = useSelector(selectIsAuth);
  return (
    <div>
      <header>
        <nav>
          <Link to="/">LOGO</Link>
        </nav>
        {isAuth && <UserMenu />}
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
