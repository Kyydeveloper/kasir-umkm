import React from "react";
import "../style/MiniCart.css";

function MiniCart({ cart = [], onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mini-cart">
      <div className="mini-cart-header">
        <strong>Keranjang</strong>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="mini-cart-items">
        {cart.length === 0 ? (
          <p>(Kosong)</p>
        ) : (
          cart.map((item, i) => (
            <div key={i} className="mini-cart-item">
              {item.name} - Rp {item.price.toLocaleString()}
            </div>
          ))
        )}
      </div>
      <div className="mini-cart-total">Total: Rp {total.toLocaleString()}</div>
    </div>
  );
}

export default MiniCart;
