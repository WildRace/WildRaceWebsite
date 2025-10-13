import React from "react";
import Link from "next/link";

function Navbar() {
  const navStyles = {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "linear-gradient(to right, #270f0fff, rgba(148, 57, 57, 1)ff, #d83939ff)",
    boxShadow: "0 2px 15px rgba(255, 32, 32, 0.2)",
    position: "sticky" as const,
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid rgba(255, 32, 32, 0.1)",
  };

  const linkContainerStyles = {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "#ffffffff",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    textShadow: "0 0 15px rgba(219, 175, 0, 0.5)",
    ':hover': {
      backgroundColor: "rgba(255, 127, 127, 0.1)",
      color: "#ffffff",
      textShadow: "0 0 15px rgba(219, 175, 0, 0.5)",
    },
  };

  const loginStyles = {
    ...linkStyles,
    background: "linear-gradient(to right, #d83939ff, #db0000ff)",
    color: "#ffffff",
    ':hover': {
      background: "linear-gradient(to right, #d83939ff, #db0000ff)",
      boxShadow: "0 0 15px rgba(219, 175, 0, 0.5)",
    },
  };

  return (
    <nav style={navStyles}>
      <div style={linkContainerStyles}>
        <Link href="/" style={linkStyles}>
          Home
        </Link>
        <Link href="/about" style={linkStyles}>
          About
        </Link>
        <Link href="/game" style={linkStyles}>
          Game
        </Link>
      </div>
      <div>
        <Link href="/login" style={loginStyles}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
