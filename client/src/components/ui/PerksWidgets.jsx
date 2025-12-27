import React from 'react';

const PerksWidget = ({ perks }) => {
  return (
    <div className="mt-4">
      <hr className="mb-5 border" />

      <p className="text-2xl font-semibold">
        What this place offers
      </p>

      <div className="mt-4 grid flex-col gap-4 lg:grid-cols-2 lg:justify-items-start">
        {/* WIFI */}
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.808-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18.75h.008v.008H12v-.008z"
            />
          </svg>

          <span className={perks?.includes('wifi') ? '' : 'line-through'}>
            Wifi
          </span>
        </div>

        {/* PARKING */}
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75V5.25H12a3.75 3.75 0 010 7.5H8.25"
            />
          </svg>

          <span className={perks?.includes('parking') ? '' : 'line-through'}>
            Free parking
          </span>
        </div>

        {/* TV */}
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.5m6-1.5v1.5M3 13.5h18M4.5 6.75h15A1.5 1.5 0 0121 8.25v6A1.5 1.5 0 0119.5 15.75h-15A1.5 1.5 0 013 14.25v-6A1.5 1.5 0 014.5 6.75z"
            />
          </svg>

          <span className={perks?.includes('tv') ? '' : 'line-through'}>
            TV
          </span>
        </div>

        {/* PETS */}
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM4.5 9a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm15 0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12 12.75a3.75 3.75 0 00-3.75 3.75v1.5h7.5v-1.5A3.75 3.75 0 0012 12.75z"
            />
          </svg>

          <span className={perks?.includes('pets') ? '' : 'line-through'}>
            Pets
          </span>
        </div>

        {/* ENTRANCE */}
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 3h6v18h-6M9 21V3M3 21V3"
            />
          </svg>

          <span className={perks?.includes('entrance') ? '' : 'line-through'}>
            Private entrance
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerksWidget;