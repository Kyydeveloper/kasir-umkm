import React, { useState } from "react";

function ManualInput({ addToCart }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !price) return alert("Isi nama dan harga!");
    addToCart({ name, price: parseInt(price) });
    setName("");
    setPrice("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nama Barang"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Harga (Rp)"
        type="number"
      />
      <button onClick={handleAdd}>+ Tambah Manual</button>
    </div>
  );
}

export default ManualInput;
