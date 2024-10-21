import React from 'react';
import LeftNavigation from '../components/LeftNavigation';
import { Outlet } from 'react-router-dom';

const AdminPage: React.FC = () => {
  return (
    <div className="admin-page">
      <LeftNavigation />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
