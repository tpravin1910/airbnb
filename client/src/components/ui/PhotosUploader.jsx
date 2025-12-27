import React, { useState } from 'react';
import Image from './Image';
import axiosInstance from '../../utils/axios';

const PhotosUploader = ({ addedPhotos, setAddedPhotos }) => {
  const [photoLink, setPhotoLink] = useState('');

  // ================= ADD PHOTO BY LINK =================
  const addPhotoByLink = async (e) => {
    e.preventDefault();
    try {
      const { data: filename } = await axiosInstance.post(
        '/upload-by-link',
        {
          link: photoLink,
        }
      );
      setAddedPhotos((prev) => [...prev, filename]);
      setPhotoLink('');
    } catch (err) {
      console.error(err);
    }
  };

  // ================= UPLOAD PHOTO FROM DEVICE =================
  const uploadPhoto = async (e) => {
    const files = e.target.files;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i]);
    }

    try {
      const response = await axiosInstance.post('/upload', data, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });

      const { data: filenames } = response;
      setAddedPhotos((prev) => [...prev, ...filenames]);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= REMOVE PHOTO =================
  const removePhoto = (photo) => {
    setAddedPhotos(addedPhotos.filter((p) => p !== photo));
  };

  // ================= SET MAIN PHOTO =================
  const selectAsMainPhoto = (photo) => {
    setAddedPhotos([
      photo,
      ...addedPhotos.filter((p) => p !== photo),
    ]);
  };

  return (
    <>
      {/* ADD BY LINK */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add using a link ....jpg"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
          className="w-full rounded-2xl border p-2"
        />
        <button
          onClick={addPhotoByLink}
          className="rounded-2xl bg-gray-200 px-4"
        >
          Add&nbsp;photo
        </button>
      </div>

      {/* PHOTO GRID */}
      <div className="mt-2 grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((photo) => (
            <div key={photo} className="relative">
              <Image
                className="rounded-2xl object-cover"
                src={photo}
                alt=""
              />

              {/* REMOVE BUTTON */}
              <button
                onClick={() => removePhoto(photo)}
                className="absolute bottom-1 right-1 rounded-2xl bg-black bg-opacity-50 p-1 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* MAIN PHOTO BUTTON */}
              <button
                onClick={() => selectAsMainPhoto(photo)}
                className="absolute bottom-1 left-1 rounded-2xl bg-black bg-opacity-50 p-1 text-white"
              >
                {photo === addedPhotos[0] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M11.48 3.499a.75.75 0 011.04 0l2.123 2.15 2.99.435a.75.75 0 01.416 1.279l-2.163 2.108.51 2.972a.75.75 0 01-1.088.791L12 11.897l-2.67 1.337a.75.75 0 01-1.088-.79l.51-2.973-2.163-2.108a.75.75 0 01.416-1.28l2.99-.434 2.123-2.15z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.75.75 0 011.04 0l2.123 2.15 2.99.435a.75.75 0 01.416 1.279l-2.163 2.108.51 2.972a.75.75 0 01-1.088.791L12 11.897l-2.67 1.337a.75.75 0 01-1.088-.79l.51-2.973-2.163-2.108a.75.75 0 01.416-1.28l2.99-.434 2.123-2.15z"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}

        {/* UPLOAD INPUT */}
        <label className="flex cursor-pointer items-center justify-center gap-1 rounded-2xl border bg-transparent p-8 text-2xl text-gray-600">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Upload
        </label>
      </div>
    </>
  );
};

export default PhotosUploader;
