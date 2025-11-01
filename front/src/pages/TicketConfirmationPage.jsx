import React from "react";

// --- Іконки для деталей квитка (можна винести в окремий файл) ---
const CalendarIcon = () => (
  <svg
    className="w-5 h-5 mr-3 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);
const ClockIcon = () => (
  <svg
    className="w-5 h-5 mr-3 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);
const LocationIcon = () => (
  <svg
    className="w-5 h-5 mr-3 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
  </svg>
);
const ChairIcon = () => (
  <svg
    className="w-5 h-5 mr-3 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2m-6 0H7a2 2 0 01-2-2v0a2 2 0 012-2h10a2 2 0 012 2v0a2 2 0 01-2 2h-2m-6 0h.01M12 11h.01"
    />
  </svg>
);

// --- Основний компонент сторінки ---
function TicketConfirmationPage() {
  // Приклад даних квитка. В реальному додатку ці дані будуть приходити
  // з сервера або стану після успішної оплати.
  const purchasedTicket = {
    movieTitle: "Дюна: Частина друга",
    posterUrl: "https://placehold.co/200x300/1a202c/ffffff?text=Dune+2",
    date: "25 жовтня 2025",
    time: "19:30",
    cinema: "Планета Кіно",
    hall: "Зал IMAX",
    row: 8,
    seat: 12,
    qrCodeUrl: "https://placehold.co/200x200/ffffff/1a202c?text=QR+CODE",
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-400 mb-2">
          Квиток успішно придбано!
        </h1>
        <p className="text-gray-300 text-lg">
          Дякуємо за покупку. Ваш квиток готовий.
        </p>
      </div>

      {/* --- КАРТКА КВИТКА --- */}
      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* --- ОСНОВНА ІНФОРМАЦІЯ (ЛІВА ЧАСТИНА) --- */}
        <div className="p-8 flex-grow">
          <div className="flex flex-col sm:flex-row gap-6">
            <img
              src={purchasedTicket.posterUrl}
              alt={`Постер ${purchasedTicket.movieTitle}`}
              className="w-32 h-48 rounded-lg object-cover self-center sm:self-start"
            />
            <div>
              <span className="text-indigo-400 font-semibold">
                Ваш квиток на фільм
              </span>
              <h2 className="text-3xl font-bold mt-1 mb-4">
                {purchasedTicket.movieTitle}
              </h2>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-center">
                  <LocationIcon />{" "}
                  {`${purchasedTicket.cinema}, ${purchasedTicket.hall}`}
                </div>
                <div className="flex items-center">
                  <CalendarIcon /> {purchasedTicket.date}
                </div>
                <div className="flex items-center">
                  <ClockIcon /> {purchasedTicket.time}
                </div>
                <div className="flex items-center">
                  <ChairIcon />{" "}
                  {`Ряд: ${purchasedTicket.row}, Місце: ${purchasedTicket.seat}`}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- "ВІДРИВНИЙ" КОРІНЕЦЬ З QR-КОДОМ (ПРАВА ЧАСТИНА) --- */}
        <div className="bg-gray-900 md:border-l-2 border-dashed border-gray-600 p-8 flex flex-col items-center justify-center min-w-[250px]">
          <h3 className="text-lg font-bold mb-4">Покажіть на вході</h3>
          <div className="bg-white p-2 rounded-lg">
            <img
              src={purchasedTicket.qrCodeUrl}
              alt="QR-код для сканування"
              className="w-40 h-40"
            />
          </div>
          <div className="text-center mt-4">
            <div className="text-gray-400">Ряд</div>
            <div className="text-3xl font-bold">{purchasedTicket.row}</div>
            <div className="text-gray-400 mt-2">Місце</div>
            <div className="text-3xl font-bold">{purchasedTicket.seat}</div>
          </div>
        </div>
      </div>

      <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
        Перейти до моїх квитків
      </button>
    </div>
  );
}

export default TicketConfirmationPage;
