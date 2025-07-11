import React from "react";

function Receipt({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const cetakStruk = () => {
    let struk = "===== Struk Belanja =====\n";
    cart.forEach((item) => {
      struk += `${item.name} - Rp ${item.price.toLocaleString()}\n`;
    });
    struk += `-----------------------------\nTotal: Rp ${total.toLocaleString()}\nTerima kasih!`;

    const win = window.open("", "", "width=400,height=600");
    win.document.write(`<pre>${struk}</pre>`);
    win.print();
  };

  return (
    <div>
      <button onClick={cetakStruk}>🧾 Cetak Struk</button>
    </div>
  );
}

export default Receipt;
