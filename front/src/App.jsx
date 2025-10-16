import React from "react";
import Header from "./components/Header"; // 1. Імпортуємо наш новий компонент

function App() {
  return (
    // Використовуємо div як контейнер для всього застосунку
    <div>
      <Header /> {/* 2. Вставляємо компонент Header */}
      {/* Тут буде основний контент вашої сторінки */}
      <main className="p-8">
        <h1 className="text-2xl font-bold">Вітаємо на FilmHub!</h1>
        <p>Оберіть фільм для перегляду.</p>
      </main>
    </div>
  );
}

export default App;
