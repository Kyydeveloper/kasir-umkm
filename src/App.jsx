import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import ManualInput from "./components/ManualInput";
import Receipt from "./components/Receipt";
import "./style/App.css";

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0); // Paksa scroll ke atas
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }, 50); // Delay 50ms agar DOM sempat dirender
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    showToast("✅ Ditambahkan ke keranjang");
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };
  const showToast = (msg = "Berhasil") => {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  };

  return (
    <>
      <Navbar cart={cart} />
      <main className="container">
        <section id="katalog">
          <h2>Katalog Aksesoris</h2>
          <Catalog addToCart={addToCart} />
        </section>

        <section id="keranjang">
          <h2>Keranjang Belanja</h2>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </section>

        <section id="manual">
          <h2>Input Manual Barang</h2>
          <ManualInput addToCart={addToCart} />
        </section>

        <section id="struk">
          <h2>Cetak Struk</h2>
          <Receipt cart={cart} />
        </section>

        <section id="kontak" className="contact-section">
          <h2>Hubungi Kami</h2>
          <div className="contact-container">
            <div className="contact-form">
              <form
                action="mailto:kasir@umkmshop.com"
                method="POST"
                encType="text/plain"
              >
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama Anda"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  required
                />
                <textarea
                  name="pesan"
                  placeholder="Tulis pesan..."
                  rows="5"
                  required
                ></textarea>
                <button type="submit">Kirim Pesan</button>
              </form>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <div id="toast" className="toast">
        Ditambahkan ke keranjang ✅
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} UMKM Aksesoris by KYY Developer
          </p>
          <p>Email: kyydeveloper@gmail.com | Telp: 083142298339</p>
          <div className="footer-socials">
            <a href="https://instagram.com/mhd.zaki13" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com/kyydeveloper" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://wa.me/6283142298339" target="_blank">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
