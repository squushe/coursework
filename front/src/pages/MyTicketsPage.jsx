import React, { useState } from "react";

const CalendarIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-gray-400"
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
    className="w-5 h-5 mr-2 text-gray-400"
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
    className="w-5 h-5 mr-2 text-gray-400"
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

const TicketCard = ({ ticket }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden transform hover:scale-105 transition-transform duration-300">
    {/* Постер фільму */}
    <img
      src={ticket.posterUrl}
      alt={`Постер ${ticket.movieTitle}`}
      className="w-full md:w-48 h-64 md:h-auto object-cover"
    />

    {/* Основна інформація про квиток */}
    <div className="p-6 flex flex-col justify-between flex-grow">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {ticket.movieTitle}
        </h3>
        <div className="flex items-center text-gray-300 mb-2">
          <LocationIcon />
          <span>{`${ticket.cinema}, ${ticket.hall}`}</span>
        </div>
        <div className="flex items-center text-gray-300 mb-2">
          <CalendarIcon />
          <span>{ticket.date}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <ClockIcon />
          <span>{ticket.time}</span>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <span className="text-lg text-indigo-400 font-semibold">
          {`Ряд: ${ticket.row}, Місце: ${ticket.seat}`}
        </span>
      </div>
    </div>

    {/* QR-код та деталі місця */}
    <div className="bg-gray-900 p-6 flex flex-col items-center justify-center min-w-[200px]">
      <img
        src={ticket.qrCodeUrl}
        alt="QR-код для квитка"
        className="w-32 h-32 rounded-md"
      />
      <p className="text-gray-400 mt-3 text-sm">Покажіть на вході</p>
    </div>
  </div>
);

// --- ОСНОВНИЙ КОМПОНЕНТ СТОРІНКИ "МОЇ КВИТКИ" ---
function MyTicketsPage() {
  // Приклад даних. Замініть цей масив на дані з вашого сервера.
  const [tickets, setTickets] = useState([
    {
      id: 1,
      movieTitle: "Дюна: Частина друга",
      posterUrl: "https://placehold.co/200x300/1a202c/ffffff?text=Dune+2",
      date: "25 жовтня 2025",
      time: "19:30",
      cinema: "Планета Кіно",
      hall: "IMAX",
      row: 8,
      seat: 12,
      qrCodeUrl: "https://placehold.co/150x150/ffffff/1a202c?text=QR+CODE",
    },
    {
      id: 2,
      movieTitle: "Мавка. Лісова пісня",
      posterUrl: "https://placehold.co/200x300/1a202c/ffffff?text=Mavka",
      date: "28 жовтня 2025",
      time: "16:00",
      cinema: "Multiplex",
      hall: "Зал 5",
      row: 5,
      seat: 7,
      qrCodeUrl: "https://placehold.co/150x150/ffffff/1a202c?text=QR+CODE",
    },
    {
      id: 3,
      movieTitle: "Люксембург, Люксембург",
      posterUrl: "https://placehold.co/200x300/1a202c/ffffff?text=Luxembourg",
      date: "1 листопада 2025",
      time: "21:00",
      cinema: "Оскар",
      hall: "Зал 2",
      row: 10,
      seat: 4,
      qrCodeUrl: "https://placehold.co/150x150/ffffff/1a202c?text=QR+CODE",
    },
  ]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-8 border-b-2 border-indigo-500 pb-4">
          Мої квитки
        </h1>

        {tickets.length > 0 ? (
          <div className="space-y-8">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              У вас ще немає заброньованих квитків
            </h2>
            <p className="text-gray-400 mb-6">
              Перейдіть до афіші, щоб вибрати фільм та забронювати місце.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Перейти до афіші
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyTicketsPage;
