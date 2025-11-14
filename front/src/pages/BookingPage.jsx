import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getSessionById,
  reserveSeat,
  confirmPurchase,
} from "../components/api";

const formatTime = (dateString) =>
  new Date(dateString).toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });
const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
  });

function BookingPage() {
  const { screeningId } = useParams();
  const navigate = useNavigate();
  const userId = 1; // TODO: Отримати ID залогіненого користувача

  const [sessionDetails, setSessionDetails] = useState(null);
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadSessionData = async () => {
      try {
        const data = await getSessionById(screeningId);
        setSessionDetails(data);

        const hallLayout = [];
        for (let row = 1; row <= 8; row++) {
          for (let seat = 1; seat <= 12; seat++) {
            // TODO: Відмічати зайняті місця (data.takenSeats)
            hallLayout.push({ row, seat, status: "free" });
          }
        }
        setSeats(hallLayout);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadSessionData();
  }, [screeningId]);

  const handleSeatClick = async (row, seat) => {
    const seatKey = `${row}-${seat}`;
    const isSelected = selectedSeats.some(
      (s) => s.row === row && s.seat === seat
    );
    setMessage("");

    if (isSelected) {
      // TODO: Реалізувати логіку зняття резервації (DELETE запит на бекенд)
      setSelectedSeats(
        selectedSeats.filter((s) => !(s.row === row && s.seat === seat))
      );
    } else {
      try {
        const result = await reserveSeat({ screeningId, row, seat, userId });
        if (result && result.message.includes("зарезервовано")) {
          setSelectedSeats([...selectedSeats, { row, seat }]);
        } else {
          setMessage(result.message || "Не вдалося забронювати місце.");
        }
      } catch (error) {
        setMessage(error.message);
      }
    }
  };

  const handleConfirm = async () => {
    if (selectedSeats.length === 0) {
      setMessage("Будь ласка, оберіть хоча б одне місце.");
      return;
    }

    try {
      const result = await confirmPurchase({
        screeningId,
        seats: selectedSeats,
        userId,
      });
      setMessage(result.message);
      setTimeout(() => {
        navigate("/confirmation");
      }, 2000);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const getSeatClass = (seat) => {
    const isSelected = selectedSeats.some(
      (s) => s.row === seat.row && s.seat === seat.seat
    );
    if (isSelected) return "bg-yellow-500 hover:bg-yellow-600";
    if (seat.status === "taken") return "bg-red-700 cursor-not-allowed";
    return "bg-blue-500 hover:bg-blue-600";
  };

  if (isLoading)
    return (
      <div className="text-center p-10 text-white">Завантаження сеансу...</div>
    );
  if (error)
    return (
      <div className="text-center p-10 text-red-500">Помилка: {error}</div>
    );
  if (!sessionDetails)
    return (
      <div className="text-center p-10 text-white">Сеанс не знайдено.</div>
    );

  return (
    <div className="container mx-auto p-4 md:p-8 text-white">
      <div className="bg-gray-800 rounded-lg p-6 mb-8 flex flex-col sm:flex-row items-center gap-6">
        <img
          src={sessionDetails.movie_poster}
          alt="Постер"
          className="w-24 rounded hidden sm:block"
        />
        <div>
          <h1 className="text-3xl font-bold">{sessionDetails.movie_title}</h1>
          <p className="text-gray-300">
            {sessionDetails.hall_name} • {formatDate(sessionDetails.start_time)}{" "}
            o {formatTime(sessionDetails.start_time)}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-8">Оберіть місця</h2>
      <div
        className="bg-white w-full h-2 mb-8 rounded opacity-50"
        style={{ boxShadow: "0 0 20px 5px rgba(255,255,255,0.5)" }}
      >
        <p className="text-center text-gray-900 -mt-6 font-bold">ЕКРАН</p>
      </div>

      <div className="grid grid-cols-12 gap-2 max-w-2xl mx-auto">
        {seats.map((seat, index) => (
          <button
            key={index}
            onClick={() => handleSeatClick(seat.row, seat.seat)}
            disabled={seat.status !== "free"}
            className={`w-full aspect-square rounded text-xs sm:text-sm transition-colors flex items-center justify-center ${getSeatClass(
              seat
            )}`}
          >
            {seat.seat}
          </button>
        ))}
      </div>

      <div className="mt-8 text-center max-w-2xl mx-auto">
        <div className="bg-gray-800 p-4 rounded-lg min-h-[100px] flex flex-col justify-center">
          {selectedSeats.length > 0 ? (
            <>
              <p className="text-lg mb-2">
                Обрані місця:{" "}
                {selectedSeats.map((s) => `Р${s.row}М${s.seat}`).join(", ")}
              </p>
              <p className="font-bold text-xl">
                До сплати: {selectedSeats.length * sessionDetails.price} грн
              </p>
            </>
          ) : (
            <p className="text-gray-400">Оберіть місця на схемі залу</p>
          )}
        </div>
        {message && (
          <p
            className={`my-4 font-semibold ${
              message.includes("успішно") ? "text-green-400" : "text-yellow-400"
            }`}
          >
            {message}
          </p>
        )}
        <button
          onClick={handleConfirm}
          disabled={selectedSeats.length === 0}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Підтвердити покупку
        </button>
      </div>
    </div>
  );
}

export default BookingPage;
