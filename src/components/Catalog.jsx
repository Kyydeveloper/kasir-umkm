import React, { useState } from "react";
import cincin from "../assets/cincin.jpeg";
import kalung from "../assets/kalung.jpeg";
import gelang from "../assets/gelang.jpeg";
import anting from "../assets/anting.jpeg";
import topi from "../assets/topi.jpeg";
import kacamata from "../assets/kacamata.jpeg";
import jam from "../assets/jam.jpeg";
import lanyard from "../assets/lanyard.jpeg";
import ikat_pinggang from "../assets/ik.jpeg";
import dasi from "../assets/dasi.jpeg";
import gantungan_kunci from "../assets/gk.jpeg";
import syal from "../assets/syal.jpeg";

// Tambahkan kategori pada setiap produk
const products = [
  { name: "Cincin", price: 20000, image: cincin, category: "Aksesoris" },
  { name: "Kalung", price: 35000, image: kalung, category: "Aksesoris" },
  { name: "Gelang", price: 15000, image: gelang, category: "Aksesoris" },
  { name: "Anting", price: 18000, image: anting, category: "Aksesoris" },
  { name: "Kacamata", price: 15000, image: kacamata, category: "Fashion" },
  { name: "Topi", price: 38000, image: topi, category: "Fashion" },
  { name: "Jam", price: 145000, image: jam, category: "Fashion" },
  { name: "Lanyard", price: 20000, image: lanyard, category: "Perlengkapan" },
  {
    name: "Gantungan Kunci",
    price: 10000,
    image: gantungan_kunci,
    category: "Perlengkapan",
  },
  {
    name: "Ikat Pinggang",
    price: 35000,
    image: ikat_pinggang,
    category: "Fashion",
  },
  { name: "Dasi", price: 30000, image: dasi, category: "Fashion" },
  { name: "Syal", price: 15000, image: syal, category: "Fashion" },
];

function Catalog({ addToCart }) {
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("Semua");

  // Filter produk berdasarkan nama & kategori
  const filtered = products.filter((item) => {
    const cocokNama = item.name.toLowerCase().includes(search.toLowerCase());
    const cocokKategori = kategori === "Semua" || item.category === kategori;
    return cocokNama && cocokKategori;
  });

  return (
    <>
      {/* Input pencarian dan filter kategori */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            flex: "1",
          }}
        />
        <select
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <option value="Semua">Semua</option>
          <option value="Aksesoris">Aksesoris</option>
          <option value="Fashion">Fashion</option>
          <option value="Perlengkapan">Perlengkapan</option>
        </select>
      </div>

      {/* Katalog produk */}
      <div className="catalog">
        {filtered.map((product, i) => (
          <div key={i} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rp {product.price.toLocaleString()}</p>
            <button onClick={() => addToCart(product)}>+ Tambah</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Catalog;
