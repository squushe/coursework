import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieById } from "../components/api";

const PlayIcon = () => (
  <svg
    className="w-6 h-6 mr-2"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w.org/2000/svg"
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
    xmlns="http://www.w.org/2000/svg"
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

const formatDuration = (minutes) => {
  if (!minutes) return "N/A";
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} год ${remainingMinutes} хв`;
};

function MovieTemplatePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      setError(null);
      setMovie(null);
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (isLoading) {
    return (
      <div className="text-center text-2xl p-10 text-white">
        Завантаження інформації про фільм...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-2xl text-red-500 p-10">
        Помилка: {error}
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-center text-2xl p-10 text-white">
        Фільм не знайдено.
      </div>
    );
  }

  const cast = movie.actors;

  return (
    <>
      <div
        className="relative w-full min-h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${movie.poster_url})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md"></div>
        <div className="relative container mx-auto p-4 md:p-8 h-full flex items-center">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={movie.poster_url}
              alt={`Постер ${movie.title}`}
              className="w-60 rounded-lg shadow-2xl"
            />
            <div className="text-center md:text-left text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                {movie.title}
              </h1>
              <div className="flex justify-center md:justify-start flex-wrap gap-4 mb-6">
                <span className="bg-gray-700 px-3 py-1 rounded-full">
                  {new Date(movie.release_date).getFullYear()}
                </span>
                <span className="bg-gray-700 px-3 py-1 rounded-full">
                  {movie.genre}
                </span>
                <span className="bg-gray-700 px-3 py-1 rounded-full">
                  {formatDuration(movie.duration_minutes)}
                </span>
              </div>
              <p className="max-w-2xl text-gray-200 mb-6">
                {movie.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsTrailerOpen(true)}
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  <PlayIcon />
                  Дивитись трейлер
                </button>
                <Link
                  to={`/booking/1`}
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  <TicketIcon />
                  Забронювати
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold mb-6 text-white">Акторський склад</h2>
        {cast && cast.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {cast.map((actor) => (
              <div key={actor.id} className="text-center text-white">
                <img
                  src={actor.photo_url}
                  alt={actor.name}
                  className="w-full h-48 object-cover rounded-lg mb-2 shadow-md"
                />
                <p className="font-semibold">{actor.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">
            Інформація про акторський склад відсутня.
          </p>
        )}
      </div>

      {isTrailerOpen && (
        <TrailerModal
          trailerId={"dQw4w9WgXcQ"}
          onClose={() => setIsTrailerOpen(false)}
        />
      )}
    </>
  );
}

export default MovieTemplatePage;
