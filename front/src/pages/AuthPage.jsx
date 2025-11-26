import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../components/Api";

const UserIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    ></path>
  </svg>
);
const MailIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    ></path>
  </svg>
);
const LockIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    ></path>
  </svg>
);

function AuthPage() {
  const [authMode, setAuthMode] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const switchAuthMode = () => {
    setAuthMode(authMode === "login" ? "register" : "login");
    setFormData({ name: "", email: "", password: "" });
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      if (authMode === "login") {
        if (!formData.email || !formData.password) {
          throw new Error("Будь ласка, заповніть усі поля для входу.");
        }

        const credentials = {
          email: formData.email,
          password: formData.password,
        };
        const data = await loginUser(credentials);

        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.userId);
          setMessage(data.message);

          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } else {
        if (!formData.name || !formData.email || !formData.password) {
          throw new Error("Будь ласка, заповніть усі поля для реєстрації.");
        }

        const data = await registerUser(formData);

        setMessage("Реєстрація успішна! Тепер ви можете увійти.");
        setTimeout(() => {
          switchAuthMode();
        }, 2000);
      }
    } catch (error) {
      console.error("Помилка автентифікації:", error.message);
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2">
          {authMode === "login" ? "Вхід до акаунту" : "Створення акаунту"}
        </h2>
        <p className="text-center text-gray-400 mb-8">
          {authMode === "login"
            ? "Увійдіть, щоб керувати своїми квитками."
            : "Зареєструйтесь, щоб купувати квитки."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {authMode === "register" && (
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Ваше ім'я"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <MailIcon />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockIcon />
            </span>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {message && (
            <p
              className={`text-center ${
                message.includes("успіш") ? "text-green-400" : "text-yellow-400"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-colors disabled:bg-indigo-400 disabled:cursor-not-allowed"
          >
            {isLoading
              ? "Завантаження..."
              : authMode === "login"
              ? "Увійти"
              : "Зареєструватися"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-400">
            {authMode === "login" ? "Ще не маєте акаунту? " : "Вже є акаунт? "}
            <button
              onClick={switchAuthMode}
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              {authMode === "login" ? "Зареєструватися" : "Увійти"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
