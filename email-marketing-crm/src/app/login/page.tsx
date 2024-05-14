"use client"; // Ensure this is the first line to mark as a Client Component

import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = async () => {
    try {
      // Make a POST request to the Appwrite authentication endpoint
      const response = await axios.post("https://cloud.appwrite.io/v1/", {
        email,
        password,
      });

      // If login is successful, handle the response (e.g., store session token)
      console.log("Login successful:", response.data);
    } catch (error) {
      // If login fails, handle the error (e.g., display error message to user)
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          // The request was made and the server responded with a status code
          const responseData = axiosError.response.data as { message?: string }; // Specify the type explicitly
          console.error("Login failed:", responseData);
          setErrorMessage(
            responseData.message || "An error occurred during login"
          );
        } else {
          // The request was made but no response was received
          console.error("No response received:", axiosError.message);
          setErrorMessage("No response received from server");
        }
      } else {
        // An error occurred while setting up the request
        console.error("Request error:", error);
        setErrorMessage("An error occurred while sending the request");
      }
    }
  };

  return (
    <Container
      className="bg-white shadow-md shadow-[rgba(4,4,4,.72)] rounded-lg p-4 m-auto"
      maxWidth="sm"
    >
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome Back!
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value={rememberMe} color="primary" />}
            label="Remember me"
            onChange={(e) =>
              setRememberMe((e.target as HTMLInputElement).checked)
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary">
          <a href="#">Forgot password?</a>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Don't have an account? <a href="#">Sign Up</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
