import React, { useEffect } from "react";
import { initFlowbite } from "flowbite"; // Імпортуємо функцію ініціалізації

// Зверніть увагу: SVG атрибути з дефісом (stroke-linecap) потрібно перетворити на camelCase (strokeLinecap)
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
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <main className="container mx-auto p-4 flex-grow">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Популярні фільми
      </h2>

      {/* Multi-slide карусель */}
      <div
        id="multi-slide-carousel"
        className="relative w-full"
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="relative h-[500px] overflow-hidden rounded-lg">
          {/* Slide/Page 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full h-full">
              {/* Картка фільму 1 */}
              <div className="group relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/dunePartTwo.jpg"
                  alt="Постер фільму Дюна: Частина друга"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Детальніше
                  </a>
                </div>
              </div>
              {/* Картка фільму 2 */}
              <div className="group relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/Oppenheimer.jpg"
                  alt="Постер фільму Оппенгеймер"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Детальніше
                  </a>
                </div>
              </div>
              {/* Картка фільму 3 */}
              <div className="group relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/The Shawshank Redemption.jpg"
                  alt="Постер фільму Втеча з Шоушенка"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Детальніше
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Slide/Page 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full h-full">
              {/* Картка фільму 4 */}
              <div className="group relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/Interstellar.jpg"
                  alt="Постер фільму Інтерстеллар"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Детальніше
                  </a>
                </div>
              </div>
              {/* Картка фільму 5 */}
              <div className="group relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/dunePartTwo.jpg"
                  alt="Постер фільму Дюна: Частина друга"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Детальніше
                  </a>
                </div>
              </div>
              {/* Картка фільму 6 */}
              <div className="group relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/Oppenheimer.jpg"
                  alt="Постер фільму Оппенгеймер"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Детальніше
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
        </div>
        {/* Slider controls */}
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
