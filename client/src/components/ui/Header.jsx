import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAuth } from '../../../hooks';
import SearchBar from './SearchBar';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

export const Header = () => {
  const auth = useAuth();
  const location = useLocation();
  const { user } = auth;

  const [showSearchBar, setShowSearchBar] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);

  const handleScroll = () => {
    setHasShadow(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // show search bar only on home page
    setShowSearchBar(location.pathname === '/');

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 z-10 flex w-full justify-center bg-white py-4 ${
        hasShadow ? 'shadow-md' : ''
      }`}
    >
      <div
        className={`flex w-full max-w-screen-xl items-center ${
          showSearchBar ? 'justify-around' : 'justify-between px-10'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <img
            className="h-8 w-8 md:h-10 md:w-10"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
            alt="Airbnb"
          />
          <span className="hidden text-2xl font-bold text-red-500 md:block">
            airbnb
          </span>
        </Link>

        {/* Search Bar */}
        {showSearchBar && <SearchBar />}

        {/* Profile */}
        <Link
          to={user ? '/account' : '/login'}
          className="flex items-center gap-2 rounded-full border px-3 py-2"
        >
          {/* Menu Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hidden h-6 w-6 md:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {/* Avatar */}
          <div className="h-[35px] w-[35px] overflow-hidden rounded-full">
            {user ? (
              <Avatar>
                <AvatarImage
                  src={
                    user.picture ||
                    'https://res.cloudinary.com/rahul4019/image/upload/v1/default-avatar'
                  }
                  className="h-full w-full"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ) : (
              <svg
                fill="#858080"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8"
              >
                <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" />
              </svg>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};
