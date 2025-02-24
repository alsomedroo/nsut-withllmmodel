"use client";

import { useAuth } from "../components/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push("/SignIn"); // Redirect to sign-in page
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) return null; // Prevent flashing before redirect

  return children;
}
