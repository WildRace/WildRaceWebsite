"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import Link from "next/link";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "#rgba(148, 57, 57, 1)ff",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    width: "24rem",
  },
  error: {
    color: "#ef4444",
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    marginBottom: "1rem",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    backgroundColor: "#rgba(255, 127, 127, 0.1)",
    color: "white",
    outline: "none",
    border: "none",
  },
  inputFocusBoxShadow: "0 0 0 2px #rgba(255, 32, 32, 0.2)",
  passwordInputMargin: {
    marginBottom: "1.5rem",
  },
  button: {
    width: "100%",
    backgroundColor: "#rgba(255, 127, 127, 0.1)",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    transition: "background-color 200ms",
    border: "none",
  },
  buttonHover: {
    backgroundColor: "#rgba(255, 127, 127, 0.1)",
  },
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      localStorage.setItem("isAuth", "true");
      setUser(auth.currentUser);
      // router.refresh();
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message.replace("Firebase: Error ", ""));
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <p style={styles.error}>{error}</p>}
				<h2 style={{ color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ ...styles.input }}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
            e.currentTarget.style.boxShadow = styles.inputFocusBoxShadow;
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ ...styles.input, ...styles.passwordInputMargin }}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
            e.currentTarget.style.boxShadow = styles.inputFocusBoxShadow;
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              styles.buttonHover.backgroundColor;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              styles.button.backgroundColor;
          }}
        >
          Log In
        </button>
        <div>
          <p style={{ color: "white", marginTop: "1rem" }}>
            Don&apos;t have an account?{" "}
            <Link
              href="register"
              style={{ color: "#ff7f7f", textDecoration: "underline" }}
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
