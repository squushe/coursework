import React from "react";
import { Routes, Route } from "react-router-dom";

// 2. Імпортуємо всі ваші сторінки (pages)
import HomePage from "./pages/HomePage";
import MovieTemplatePage from "./pages/MovieTemplatePage";
import BookingPage from "./pages/BookingPage";
import AuthPage from "./pages/AuthPage";
import MyTicketsPage from "./pages/MyTicketsPage";
import TicketConfirmationPage from "./pages/TicketConfirmationPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-900 text-white flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto p-4">
        <Routes>
          {/* Головна сторінка */}
          <Route path="/" element={<HomePage />} />

          {/* Сторінка входу та реєстрації */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Сторінка з детальною інформацією про фільм */}
          <Route path="/movie/:movieId" element={<MovieTemplatePage />} />

          {/* Сторінка бронювання місць для конкретного сеансу */}
          <Route path="/booking/:screeningId" element={<BookingPage />} />

          {/* Сторінка "Мої квитки" */}
          <Route path="/my-tickets" element={<MyTicketsPage />} />

          {/* Сторінка підтвердження після успішної покупки */}
          <Route
            path="/confirmation/:ticketId"
            element={<TicketConfirmationPage />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
