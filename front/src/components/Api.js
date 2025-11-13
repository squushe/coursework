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
