import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        Home
      </Link>
      <Link href="/about" style={{ textDecoration: "none", color: "black" }}>
        About
      </Link>
      <Link href="/game" style={{ textDecoration: "none", color: "black" }}>
        Game
      </Link>
    </nav>
  );
}

export default Navbar;
