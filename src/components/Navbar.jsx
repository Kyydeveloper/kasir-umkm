import React, { useState, useEffect } from "react";
import MiniCart from "./MiniCart";
import "../style/Navbar.css";

function Navbar({ cart = [] }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const cartCount = cart.length;
  const [showCart, setShowCart] = useState(false);

  const menuLinks = (
    <ul className="nav-links">
      <li>
        <a href="#katalog" onClick={closeSidebar}>
          Beranda
        </a>
      </li>
      <li>
        <a href="#keranjang" onClick={closeSidebar}>
          Keranjang
        </a>
      </li>
      <li>
        <a href="#manual" onClick={closeSidebar}>
          Input Manual
        </a>
      </li>
      <li>
        <a href="#struk" onClick={closeSidebar}>
          Struk
        </a>
      </li>
      <li>
        <a href="#kontak" onClick={closeSidebar}>
          Kontak
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">UMKM Aksesoris</div>
        </div>

        <div className="navbar-right">
          {isMobile ? (
            <>
              <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
                🛒
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
                {showCart && (
                  <MiniCart cart={cart} onClose={() => setShowCart(false)} />
                )}
              </div>
              <button className="toggle-btn" onClick={toggleSidebar}>
                ☰
              </button>
            </>
          ) : (
            <>
              {menuLinks}
              <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
                🛒
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
                {showCart && (
                  <MiniCart cart={cart} onClose={() => setShowCart(false)} />
                )}
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Sidebar mobile */}
      {isMobile && (
        <>
          <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
            {menuLinks}
          </div>
          {sidebarOpen && (
            <div className="overlay" onClick={closeSidebar}></div>
          )}
        </>
      )}
    </>
  );
}

export default Navbar;
