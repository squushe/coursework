import React, { useState } from "react";

const movieInfo = {
  title: "Дюна: Частина друга",
};

const availableSessions = [
  { date: "2025-10-20", times: ["14:00", "17:00", "20:00"] },
  { date: "2025-10-21", times: ["15:30", "18:30", "21:30"] },
  { date: "2025-10-22", times: ["19:00", "22:00"] },
];

const TICKET_PRICE = 180;

function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setTicketCount(1);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setTicketCount(1);
  };

  const handleTicketCountChange = (event) => {
    const count = parseInt(event.target.value, 10);
    setTicketCount(count >= 1 ? count : 1);
  };

  const handleBookingConfirm = () => {
    if (!selectedDate || !selectedTime || ticketCount < 1) {
      alert("Будь ласка, заповніть усі поля.");
      return;
    }
    const bookingDetails = {
      movie: movieInfo.title,
      date: selectedDate,
      time: selectedTime,
      tickets: ticketCount,
      totalPrice: ticketCount * TICKET_PRICE,
    };
    alert(
      `Ви успішно забронювали квитки!\n\nДеталі:\nФільм: ${bookingDetails.movie}\nДата: ${bookingDetails.date}\nЧас: ${bookingDetails.time}\nКількість квитків: ${bookingDetails.tickets}\nСума: ${bookingDetails.totalPrice} грн`
    );
  };

  return (
    <div
      style={{
        padding: "20px",
        color: "black",
        background: "white",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Бронювання квитків на фільм: {movieInfo.title}</h1>
      <hr style={{ margin: "20px 0" }} />

      <section>
        <h2>Крок 1: Виберіть дату</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {availableSessions.map((session) => (
            <button
              key={session.date}
              onClick={() => handleDateSelect(session.date)}
              style={{
                padding: "10px",
                fontSize: "16px",
                cursor: "pointer",
                border:
                  selectedDate === session.date
                    ? "2px solid blue"
                    : "1px solid gray",
              }}
            >
              {session.date}
            </button>
          ))}
        </div>
      </section>

      {selectedDate && (
        <section style={{ marginTop: "30px" }}>
          <h2>Крок 2: Виберіть час сеансу</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            {availableSessions
              .find((s) => s.date === selectedDate)
              .times.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  style={{
                    padding: "10px",
                    fontSize: "16px",
                    cursor: "pointer",
                    border:
                      selectedTime === time
                        ? "2px solid blue"
                        : "1px solid gray",
                  }}
                >
                  {time}
                </button>
              ))}
          </div>
        </section>
      )}

      {selectedTime && (
        <section style={{ marginTop: "30px" }}>
          <h2>Крок 3: Вкажіть кількість квитків</h2>
          <label
            htmlFor="ticket-count"
            style={{ marginRight: "10px", fontSize: "18px" }}
          >
            Кількість:
          </label>
          <input
            id="ticket-count"
            type="number"
            min="1"
            value={ticketCount}
            onChange={handleTicketCountChange}
            style={{ padding: "8px", fontSize: "18px", width: "80px" }}
          />
        </section>
      )}

      {selectedTime && (
        <section
          style={{
            marginTop: "40px",
            borderTop: "1px solid #ccc",
            paddingTop: "20px",
          }}
        >
          <h2>Ваше замовлення</h2>
          <p>
            Дата: <strong>{selectedDate}</strong>
          </p>
          <p>
            Час: <strong>{selectedTime}</strong>
          </p>
          <p>
            Кількість квитків: <strong>{ticketCount}</strong>
          </p>
          <p style={{ fontSize: "22px" }}>
            Загальна вартість: <strong>{ticketCount * TICKET_PRICE} грн</strong>
          </p>
          <button
            onClick={handleBookingConfirm}
            style={{
              padding: "15px 25px",
              fontSize: "18px",
              background: "green",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Забронювати
          </button>
        </section>
      )}
    </div>
  );
}

export default BookingPage;
