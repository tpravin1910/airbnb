import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">

        {/* Location */}
        <div className="px-2">
          Anywhere
        </div>

        <div className="border-l border-gray-300" />

        {/* Dates */}
        <div className="px-2">
          Any week
        </div>

        <div className="border-l border-gray-300" />

        {/* Guests */}
        <div className="px-2 text-gray-500">
          Add guests
        </div>

        {/* Search Button */}
        <Link
          to="/"
          className="bg-primary text-white rounded-full p-2 flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="mt-1 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <span className="ml-1 hidden md:block">
            Search
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
