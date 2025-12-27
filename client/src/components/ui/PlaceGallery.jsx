import React, { useState } from 'react';

const PlaceGallery = ({ place }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (!place || !place.photos || place.photos.length === 0) {
    return null;
  }

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 z-20 overflow-auto bg-white text-white">
        <div className="grid gap-4 bg-white px-2 py-20 md:px-8">
          <div>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed right-2 top-8 flex gap-1 rounded-2xl bg-white py-2 px-4 shadow"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Close photos
            </button>
          </div>

          {place.photos.map((photo, index) => (
            <div key={index}>
              <img
                className="w-full rounded-2xl"
                src={photo}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-[2fr_1fr] gap-2 rounded-3xl overflow-hidden">
        <div>
          <img
            onClick={() => setShowAllPhotos(true)}
            className="aspect-square h-full w-full cursor-pointer object-cover"
            src={place.photos[0]}
            alt=""
          />
        </div>

        <div className="grid">
          {place.photos[1] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="aspect-square cursor-pointer object-cover"
              src={place.photos[1]}
              alt=""
            />
          )}
          {place.photos[2] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="aspect-square cursor-pointer object-cover"
              src={place.photos[2]}
              alt=""
            />
          )}
        </div>
      </div>

      <button
        onClick={() => setShowAllPhotos(true)}
        className="absolute bottom-2 right-2 rounded-2xl bg-white px-4 py-2 shadow-md"
      >
        Show more photos
      </button>
    </div>
  );
};

export default PlaceGallery;
