import React from 'react';
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-0">
        <Outlet /> {/* 👈 Yaha content render hoga */}
      </main>
    </div>
  );
};

export default Layout;