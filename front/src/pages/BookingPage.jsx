import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getSessionById,
  reserveSeat,
  confirmPurchase,
} from "../components/Api";

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
  const userId = parseInt(localStorage.getItem("userId")) || null;

  const [sessionDetails, setSessionDetails] = useState(null);
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadSessionData = async () => {
      try {
        if (!userId) {
          throw new Error("Будь ласка, увійдіть, щоб забронювати квитки.");
        }

        const data = await getSessionById(screeningId);
        setSessionDetails(data);

        const hallLayout = [];
        const rows = 8;
        const seatsPerRow = 12;

        for (let row = 1; row <= rows; row++) {
          const rowSeats = [];
          for (let seatNum = 1; seatNum <= seatsPerRow; seatNum++) {
            const isTaken = data.takenSeats.some(
              (s) => s.row_number === row && s.seat_number === seatNum
            );
            const isReserved = data.reservedSeats.some(
              (s) => s.row_number === row && s.seat_number === seatNum
            );

            let status = "free";
            if (isTaken) status = "taken";
            if (isReserved) status = "reserved";

            rowSeats.push({ row, seat: seatNum, status });
          }
          hallLayout.push(rowSeats);
        }
        setSeats(hallLayout);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadSessionData();
  }, [screeningId, userId]);

  const handleSeatClick = async (row, seat, status) => {
    if (status === "taken" || status === "reserved") return;

    const seatIdentifier = { row, seat };
    const isSelected = selectedSeats.some(
      (s) => s.row === row && s.seat === seat
    );
    setMessage("");

    if (isSelected) {
      setSelectedSeats(
        selectedSeats.filter((s) => !(s.row === row && s.seat === seat))
      );
      // TODO: реалізувати зняття резервації з Redis (DELETE запит на бекенд)
    } else {
      try {
        const result = await reserveSeat({ screeningId, row, seat, userId });
        if (result && result.message.includes("зарезервовано")) {
          setSelectedSeats([...selectedSeats, seatIdentifier]);
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

  const getSeatClass = (status, seat) => {
    const isSelected = selectedSeats.some(
      (s) => s.row === seat.row && s.seat === seat.seat
    );
    if (isSelected)
      return "bg-yellow-500 hover:bg-yellow-600 border-yellow-400";
    if (status === "taken" || status === "reserved")
      return "bg-gray-600 cursor-not-allowed border-gray-700";
    return "bg-blue-500 hover:bg-blue-600 border-blue-400";
  };

  if (isLoading)
    return (
      <div className="text-center p-10 text-white">Завантаження сеансу...</div>
    );

  if (error) {
    return (
      <div className="text-center py-20 bg-gray-800 rounded-lg text-white">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">{error}</h2>
        <Link
          to="/auth"
          className="bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Увійти
        </Link>
      </div>
    );
  }

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

      <h2 className="text-2xl font-bold text-center mb-2">Оберіть місця</h2>

      <div className="relative h-12 mb-12 flex justify-center items-center">
        <div
          className="w-full max-w-4xl h-24 bg-gradient-to-b from-white/50 to-transparent"
          style={{
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            transform: "perspective(100px) rotateX(-30deg)",
            boxShadow: "0 0 40px 10px rgba(255,255,255,0.3)",
          }}
        ></div>
        <p className="absolute bottom-0 text-gray-400 tracking-[0.5em]">
          ЕКРАН
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col gap-2">
          {seats.map((rowSeats, rowIndex) => (
            <div key={rowIndex} className="flex items-center gap-2 sm:gap-4">
              <div className="w-6 text-center text-gray-400 font-semibold">
                {rowIndex + 1}
              </div>
              <div className="flex gap-1 sm:gap-2">
                {rowSeats.map((seat) => (
                  <button
                    key={`${seat.row}-${seat.seat}`}
                    onClick={() =>
                      handleSeatClick(seat.row, seat.seat, seat.status)
                    }
                    disabled={
                      seat.status !== "free" &&
                      !selectedSeats.some(
                        (s) => s.row === seat.row && s.seat === seat.seat
                      )
                    }
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded text-xs transition-colors flex items-center justify-center border-b-4 ${getSeatClass(
                      seat.status,
                      seat
                    )}`}
                  >
                    {seat.seat}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-4 sm:gap-6 mt-8">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-500 border-b-4 border-blue-400"></div>
          <span className="text-sm">Вільні</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-yellow-500 border-b-4 border-yellow-400"></div>
          <span className="text-sm">Обрані</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gray-600 border-b-4 border-gray-700"></div>
          <span className="text-sm">Зайняті</span>
        </div>
      </div>

      <div className="mt-8 text-center max-w-2xl mx-auto">
        <div className="bg-gray-800 p-4 rounded-lg min-h-[100px] flex flex-col justify-center">
          {selectedSeats.length > 0 ? (
            <>
              <p className="text-base sm:text-lg mb-2">
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
          disabled={selectedSeats.length === 0 || isLoading}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Підтвердити покупку
        </button>
      </div>
    </div>
  );
}

export default BookingPage;
