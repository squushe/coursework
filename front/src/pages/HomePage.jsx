import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { initFlowbite } from "flowbite";
import { getAllMovies } from "../components/api";

function PrevIcon() {
  return (
    <svg
      className="w-4 h-4 text-white rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 1 1 5l4 4"
      />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg
      className="w-4 h-4 text-white rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
  );
}

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getAllMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      initFlowbite();
    }
  }, [movies]);

  const movieChunks = [];
  const chunkSize = 3;
  for (let i = 0; i < movies.length; i += chunkSize) {
    movieChunks.push(movies.slice(i, i + chunkSize));
  }

  if (isLoading) {
    return (
      <div className="text-center text-2xl p-10">Завантаження фільмів...</div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-2xl text-red-500 p-10">
        Помилка: {error}
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4 flex-grow">
      <h1 className="text-4xl font-bold mb-8 text-center">Зараз у кіно</h1>

      <div
        id="multi-slide-carousel"
        className="relative w-full"
        data-carousel="static"
      >
        <div className="relative h-[500px] overflow-hidden rounded-lg">
          {movieChunks.map((chunk, index) => (
            <div
              key={index}
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full h-full">
                {chunk.map((movie) => (
                  <div
                    key={movie.id}
                    className="group relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={movie.poster_url}
                      alt={`Постер фільму ${movie.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        to={`/movie/${movie.id}`}
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                      >
                        Детальніше
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {movieChunks.map((_, index) => (
            <button
              key={index}
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <PrevIcon />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <NextIcon />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </main>
  );
}

export default HomePage;
