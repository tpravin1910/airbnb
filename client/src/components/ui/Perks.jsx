import React from 'react';

const Perks = ({ selected, handleFormData }) => {
  return (
    <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">

      {/* WIFI */}
      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
        <input
          type="checkbox"
          checked={selected.includes('wifi')}
          name="wifi"
          onChange={handleFormData}
        />
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
            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18.75h.008v.008H12v-.008z"
          />
        </svg>
        <span>Wifi</span>
      </label>

      {/* PARKING */}
      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
        <input
          type="checkbox"
          checked={selected.includes('parking')}
          name="parking"
          onChange={handleFormData}
        />
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
            d="M9 6h3a3 3 0 010 6H9m0-6v12"
          />
        </svg>
        <span>Free parking</span>
      </label>

      {/* TV */}
      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
        <input
          type="checkbox"
          checked={selected.includes('tv')}
          name="tv"
          onChange={handleFormData}
        />
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
            d="M9 17h6m2 0h.01M4 7h16v10H4z"
          />
        </svg>
        <span>TV</span>
      </label>

      {/* PETS */}
      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
        <input
          type="checkbox"
          checked={selected.includes('pets')}
          name="pets"
          onChange={handleFormData}
        />
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
            d="M11.25 9.75l-.72-2.16a1.5 1.5 0 00-2.84 0l-.72 2.16m7.56 0l.72-2.16a1.5 1.5 0 012.84 0l.72 2.16M4.5 15a3 3 0 003 3h9a3 3 0 003-3v-1.5a4.5 4.5 0 00-4.5-4.5h-6A4.5 4.5 0 004.5 13.5V15z"
          />
        </svg>
        <span>Pets</span>
      </label>

      {/* ENTRANCE */}
      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
        <input
          type="checkbox"
          checked={selected.includes('entrance')}
          name="entrance"
          onChange={handleFormData}
        />
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
            d="M3 21h18M9 8h6v13H9zM5 8h14V3H5z"
          />
        </svg>
        <span>Private entrance</span>
      </label>

      {/* RADIO */}
      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border p-4">
        <input
          type="checkbox"
          checked={selected.includes('radio')}
          name="radio"
          onChange={handleFormData}
        />
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
            d="M3 8l18-5v13H3V8zm3 6h.01M9 14h.01"
          />
        </svg>
        <span>Radio</span>
      </label>

    </div>
  );
};

export default Perks;
