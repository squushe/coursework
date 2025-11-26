import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTicketById } from "../components/Api";

const formatTime = (d) =>
  new Date(d).toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });
const formatDate = (d) =>
  new Date(d).toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

function TicketConfirmationPage() {
  const { ticketId } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const data = await getTicketById(ticketId);
        setTicket(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTicket();
  }, [ticketId]);

  if (isLoading)
    return (
      <div className="text-center p-10 text-white">
        Завантаження вашого квитка...
      </div>
    );
  if (error)
    return <div className="text-center p-10 text-yellow-400">{error}</div>;
  if (!ticket)
    return (
      <div className="text-center p-10 text-white">Квиток не знайдено.</div>
    );

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-400 mb-2">
          Квиток успішно придбано!
        </h1>
        <p className="text-gray-300 text-lg">
          Дякуємо за покупку. Ось деталі вашого квитка.
        </p>
      </div>

      <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden w-full max-w-2xl flex flex-col md:flex-row">
        <div className="p-8 flex-grow">
          <span className="text-indigo-400 font-semibold">
            Ваш квиток на фільм
          </span>
          <h2 className="text-3xl font-bold mt-1 mb-4">{ticket.movie_title}</h2>
          <div className="space-y-3 text-gray-200">
            <div>
              <span className="text-gray-400">Кінотеатр:</span>{" "}
              {ticket.hall_name}
            </div>
            <div>
              <span className="text-gray-400">Дата:</span>{" "}
              {formatDate(ticket.start_time)}
            </div>
            <div>
              <span className="text-gray-400">Час:</span>{" "}
              {formatTime(ticket.start_time)}
            </div>
          </div>
        </div>

        <div className="bg-gray-900 md:border-l-2 border-dashed border-gray-600 p-8 flex flex-col items-center justify-center min-w-[250px]">
          <h3 className="text-lg font-bold mb-4">Покажіть на вході</h3>
          <div className="bg-white p-2 rounded-lg">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ticketId:${ticket.ticket_id}`}
              alt="QR-код"
              className="w-40 h-40"
            />
          </div>
          <div className="text-center mt-4">
            <div className="text-gray-400">Ряд</div>
            <div className="text-3xl font-bold">{ticket.row_number}</div>
            <div className="text-gray-400 mt-2">Місце</div>
            <div className="text-3xl font-bold">{ticket.seat_number}</div>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/my-tickets")}
        className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
      >
        Перейти до моїх квитків
      </button>
    </div>
  );
}

export default TicketConfirmationPage;
