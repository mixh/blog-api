import { redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function action() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/");
}

export function getTokenDuration() {
  const storedDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "expired";
  }
  return token;
}

export function tokenLoader() {
  const token = getToken();
  return token;
}

export function useAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
    }
  }, [navigate]);
}
