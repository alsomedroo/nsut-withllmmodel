"use client"

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const expiry = localStorage.getItem("tokenExpiry");

    if (storedToken && expiry) {
      if (new Date().getTime() < Number(expiry)) {
        setToken(storedToken);
      } else {
        logout(); // Token expired, log out
      }
    }
  }, []);

  const login = (newToken) => {
    const expiryTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour from now
    localStorage.setItem("token", newToken);
    localStorage.setItem("tokenExpiry", expiryTime);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    setToken(null);
    router.push("/signUp"); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
