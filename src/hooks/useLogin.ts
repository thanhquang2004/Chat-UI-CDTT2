import { useState } from "react";
import { API_URL } from "../constants/urls";
import { UNKNOWN_ERROR_MESSAGE } from "../constants/errors";
import client from "../constants/apollo-clients";

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState("");

  const login = async (request: LoginRequest) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!res.ok) {
      if (res.status === 401) {
        setError("Invalid email or password");
      } else {
        setError(UNKNOWN_ERROR_MESSAGE);
      }
      return;
    }
    setError("");
    await client.refetchQueries({include: "active"});
  };

  return { login, error };
};

export { useLogin };
