/** @format */

import React from 'react';

const Navbar = ({ user }) => {
  return (
    <nav className="flex justify-between item-center py-4">
      <p className="text-2xl font-bold text-grey-800 pt-2">My Todos</p>
      <div className="flex">
        {user && (
          <div className="flex">
            <img src={user.picture} alt="avatar" className="w-10 h-10 rounded" />
            <span className="item-center py-2 px-5 text-blue-500 font-bold">{user.nickname}</span>
          </div>
        )}
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
