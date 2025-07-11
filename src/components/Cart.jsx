import React from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>Rp {item.price.toLocaleString()}</td>
              <td>
                <button onClick={() => removeFromCart(i)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">Total: Rp {total.toLocaleString()}</div>
    </div>
  );
}

export default Cart;
