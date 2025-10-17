import React, { useState } from "react";

const PlayIcon = () => (
  <svg
    className="w-6 h-6 mr-2"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const TicketIcon = () => (
  <svg
    className="w-6 h-6 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
    ></path>
  </svg>
);

const TrailerModal = ({ trailerId, onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div
      className="bg-black p-2 rounded-lg relative w-full max-w-4xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute -top-10 right-0 text-white text-3xl"
      >
        &times;
      </button>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
);

function MovieTemplatePage() {
  const placeholderMovie = {
    title: "Назва фільму-шаблону",
    tagline: "Вражаюча крилата фраза фільму",
    poster: "https://placehold.co/400x600/1a202c/ffffff?text=Poster",
    description:
      "Це детальний опис фільму, який слугує прикладом. Тут буде розказано про захопливий сюжет, неймовірних головних героїв та основні події, що відбуваються у цій видатній кінострічці.",
    year: "2025",
    genre: "Бойовик, Пригоди",
    duration: "2 год 15 хв",
    trailerId: "dQw4w9WgXcQ",
    cast: [
      {
        name: "Акторка 1",
        photo: "https://placehold.co/400x600/718096/ffffff?text=Actor+1",
      },
      {
        name: "Актор 2",
        photo: "https://placehold.co/400x600/718096/ffffff?text=Actor+2",
      },
      {
        name: "Актор 3",
        photo: "https://placehold.co/400x600/718096/ffffff?text=Actor+3",
      },
      {
        name: "Актор 4",
        photo: "https://placehold.co/400x600/718096/ffffff?text=Actor+4",
      },
      {
        name: "Актор 5",
        photo: "https://placehold.co/400x600/718096/ffffff?text=Actor+5",
      },
      {
        name: "Актор 6",
        photo: "https://placehold.co/400x600/718096/ffffff?text=Actor+6",
      },
    ],
  };

  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${placeholderMovie.poster})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md"></div>
        <div className="relative container mx-auto p-4 md:p-8 h-full flex items-center">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={placeholderMovie.poster}
              alt={`Постер ${placeholderMovie.title}`}
              className="w-60 rounded-lg shadow-2xl"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                {placeholderMovie.title}
              </h1>
              <p className="text-xl text-gray-300 italic mb-4">
                {placeholderMovie.tagline}
              </p>
              <div className="flex justify-center md:justify-start gap-4 mb-6">
                <span className="bg-gray-700 px-3 py-1 rounded-full">
                  {placeholderMovie.year}
                </span>
                <span className="bg-gray-700 px-3 py-1 rounded-full">
                  {placeholderMovie.genre}
                </span>
                <span className="bg-gray-700 px-3 py-1 rounded-full">
                  {placeholderMovie.duration}
                </span>
              </div>
              <p className="max-w-2xl text-gray-200 mb-6">
                {placeholderMovie.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsTrailerOpen(true)}
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  <PlayIcon />
                  Дивитись трейлер
                </button>
                <button className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  <TicketIcon />
                  Забронювати
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold mb-6">Акторський склад</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {placeholderMovie.cast.map((actor, index) => (
            <div key={index} className="text-center">
              <img
                src={actor.photo}
                alt={actor.name}
                className="w-full h-48 object-cover rounded-lg mb-2 shadow-md"
              />
              <p className="font-semibold">{actor.name}</p>
            </div>
          ))}
        </div>
      </div>

      {isTrailerOpen && (
        <TrailerModal
          trailerId={placeholderMovie.trailerId}
          onClose={() => setIsTrailerOpen(false)}
        />
      )}
    </>
  );
}

export default MovieTemplatePage;
