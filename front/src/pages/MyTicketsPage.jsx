import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMyTickets } from "../components/Api";

// --- Іконки ---
const CalendarIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
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

// --- Компонент картки квитка ---
const TicketCard = ({ ticket }) => {
  const formatTime = (dateString) =>
    new Date(dateString).toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
    });
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("uk-UA", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={ticket.movie_poster}
        alt={`Постер ${ticket.movie_title}`}
        className="w-full md:w-48 h-64 md:h-auto object-cover"
      />
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">
          {ticket.movie_title}
        </h3>
        <div className="flex items-center text-gray-300 mb-2">
          <LocationIcon />
          {ticket.hall_name}
        </div>
        <div className="flex items-center text-gray-300 mb-2">
          <CalendarIcon />
          {formatDate(ticket.start_time)}
        </div>
        <div className="flex items-center text-gray-300">
          <ClockIcon />
          {formatTime(ticket.start_time)}
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4">
          <span className="text-lg text-indigo-400 font-semibold">
            Ряд: {ticket.row_number}, Місце: {ticket.seat_number}
          </span>
        </div>
      </div>
      <div className="bg-gray-900 p-6 flex flex-col items-center justify-center min-w-[200px]">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ticket:${ticket.ticket_id}`}
          alt="QR-код"
          className="w-32 h-32 rounded-md bg-white p-1"
        />
        <p className="text-gray-400 mt-3 text-sm">Покажіть на вході</p>
      </div>
    </div>
  );
};

// --- Основний компонент сторінки ---
function MyTicketsPage() {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await getMyTickets();
        setTickets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTickets();
  }, []);

  if (isLoading)
    return (
      <div className="text-center p-10 text-white">
        Завантаження ваших квитків...
      </div>
    );

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-8 border-b-2 border-indigo-500 pb-4 text-white">
        Мої квитки
      </h1>

      {error && (
        <div className="text-center py-20 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            {error}
          </h2>
          <Link
            to="/auth"
            className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Увійти
          </Link>
        </div>
      )}

      {!error && tickets.length > 0 && (
        <div className="space-y-8">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.ticket_id} ticket={ticket} />
          ))}
        </div>
      )}

      {!error && tickets.length === 0 && !isLoading && (
        <div className="text-center py-20 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            У вас ще немає придбаних квитків
          </h2>
          <p className="text-gray-400 mb-6">
            Перейдіть на головну сторінку, щоб обрати фільм.
          </p>
          <Link
            to="/"
            className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            На головну
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyTicketsPage;
