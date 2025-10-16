import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      {/* Основний контейнер для перевірки */}
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 space-y-6">
        {/* 1. Перевірка кольору, розміру тексту та відступів */}
        <h1 className="text-4xl font-bold text-center text-indigo-600">
          Tailwind CSS Працює!
        </h1>

        {/* 2. Перевірка фону, тіні та заокруглення */}
        <p className="text-gray-700 text-center">
          Якщо ви бачите цей блок зі стилями, це означає, що Tailwind CSS
          успішно підключено до вашого проєкту на Vite.
        </p>

        {/* 3. Перевірка інтерактивності (hover-ефекти) */}
        <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition-transform transform hover:scale-105">
          Кнопка для тесту
        </button>

        {/* 4. Перевірка Flexbox та меж (borders) */}
        <div className="flex justify-around items-center mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="bg-green-500 text-white text-sm font-bold p-3 rounded-md">
            Flex 1
          </div>
          <div className="bg-red-500 text-white text-sm font-bold p-3 rounded-md">
            Flex 2
          </div>
          <div className="bg-blue-500 text-white text-sm font-bold p-3 rounded-md">
            Flex 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
