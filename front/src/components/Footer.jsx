import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 m-4 rounded-lg">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          © 2025{" "}
          <a href="#" className="hover:underline">
            FilmHub™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Про нас
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Політика конфіденційності
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Ліцензування
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Контакти
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
