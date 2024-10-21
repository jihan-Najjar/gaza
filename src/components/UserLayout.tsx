import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const UserLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
