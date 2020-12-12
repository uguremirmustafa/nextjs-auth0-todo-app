/** @format */

import React from 'react';

const Navbar = ({ user }) => {
  return (
    <nav className="flex justify-between item-center py-4">
      <p className="text-2xl font-bold text-grey-800">My Todos</p>
      <div className="flex">
        {user && (
          <a href="/api/logout" className="rounded bg-blue-500 px-4 py-2 hover:bg-blue-600 text-white">
            logout
          </a>
        )}
        {!user && (
          <a href="/api/login" className="rounded bg-blue-500 px-4 py-2 hover:bg-blue-600 text-white">
            login
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
