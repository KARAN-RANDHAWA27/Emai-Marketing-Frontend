"use client"; // Ensure this is the first line to mark as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use `next/navigation` for App Router
import { Account } from "appwrite";
import client from "../../../appwrite"; // Ensure correct import for Appwrite client

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // Initialize error state
  const router = useRouter(); // Initialize the router

  const handleLogin = async () => {
    const account = new Account(client); // Initialize Appwrite Account instance
    try {
      await account.createSession(email, password); // Create email session with Appwrite
      setError(null); // Clear any previous error
      router.push("/"); // Redirect to home page on successful login
    } catch (err) {
      setError("Invalid email or password"); // Set error message on failure
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message if any */}
      <button onClick={handleLogin}>Login</button> {/* Trigger login */}
    </div>
  );
};

export default Login;
