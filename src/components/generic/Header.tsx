import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        padding: "16px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(5px)",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "16px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div>
          <Link href="/">🛖 Home</Link>
        </div>
        <div>
          <Link href="/url-form">➕ Create Shorten URL </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
