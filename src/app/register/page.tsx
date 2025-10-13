"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    width: "24rem",
  },
  error: {
    color: "#ef4444",
    marginBottom: "1rem",
    padding: "0.5rem",
    backgroundColor: "#450A0A",
    borderRadius: "0.25rem",
  },
  input: {
    width: "100%",
    marginBottom: "1rem",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    color: "white",
    border: "2px solid transparent",
    transition: "box-shadow 200ms",
  },
  button: {
    width: "100%",
    backgroundColor: "#b91010ff",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    transition: "background-color 200ms",
    border: "none",
    marginTop: "0.5rem",
  },
  buttonHover: {
    backgroundColor: "#859605ff",
  },
};

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User registered successfully:", userCredential.user);

      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        const firebaseErrorMessage = err.message.replace(
          "Firebase: Error ",
          ""
        );
        setError(firebaseErrorMessage);
      } else {
        setError("An unexpected error occurred during registration.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2
          style={{
            color: "white",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Create Account
        </h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ ...styles.input }}
          onFocus={(e) => {
            e.target.style.borderColor = "#f63b3bff";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "transparent";
          }}
        />

        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          style={{ ...styles.input, marginBottom: "1.5rem" }}
          onFocus={(e) => {
            e.target.style.borderColor = "#f63b3bff";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "transparent";
          }}
        />

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.buttonHover.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.button.backgroundColor;
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
