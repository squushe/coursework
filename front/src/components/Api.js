const API_BASE_URL = "http://localhost:3001/api";

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Щось пішло не так під час реєстрації");
    }

    return data;
  } catch (error) {
    console.error("API Error (registerUser):", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Щось пішло не так під час входу");
    }

    return data;
  } catch (error) {
    console.error("API Error (loginUser):", error);
    throw error;
  }
};
export const getAllMovies = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/movies`);

    if (!response.ok) {
      throw new Error("Не вдалося завантажити фільми");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error (getAllMovies):", error);
    throw error;
  }
};
export const getMovieById = async (movieId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/movies/${movieId}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Не вдалося завантажити дані фільму"
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error (getMovieById):", error);
    throw error;
  }
};

export const getSessionById = async (sessionId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/sessions/${sessionId}`);
    if (!response.ok) {
      throw new Error("Не вдалося завантажити дані сеансу");
    }
    return await response.json();
  } catch (error) {
    console.error("API Error (getSessionById):", error);
    throw error;
  }
};

export const reserveSeat = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/booking/reserve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Помилка резервування");
    }
    return result;
  } catch (error) {
    console.error("API Error (reserveSeat):", error);
    throw error;
  }
};

export const confirmPurchase = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/booking/confirm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Помилка підтвердження покупки");
    }
    return result;
  } catch (error) {
    console.error("API Error (confirmPurchase):", error);
    throw error;
  }
};

export const getMyTickets = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Ви не авторизовані.");
    }

    const response = await fetch(`${API_BASE_URL}/tickets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Не вдалося завантажити квитки.");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error (getMyTickets):", error);
    throw error;
  }
};

export const getTicketById = async (ticketId) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Користувач не авторизований.");

    const response = await fetch(`${API_BASE_URL}/tickets/${ticketId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error("Не вдалося завантажити дані квитка.");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error (getTicketById):", error);
    throw error;
  }
};
