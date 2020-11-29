const kodePromo = ["arkafood5", "ditraktirdemy"];

function arkFood(harga, voucher, jarak, pajak) {
  voucher = voucher.toLowerCase();
  const ongkir = 5000 + (jarak - 2) * 3000;
  pajak = pajak === true ? (5 / 100) * harga : 0;

  if (
    kodePromo.find((item) => {
      return item === voucher;
    })
  ) {
    if (voucher === "arkafood5" && harga >= 50000) {
      if ((harga * 50) / 100 >= 50000) {
        potongan = 50000;
      } else {
        potongan = (harga * 50) / 100;
      }
    }
    if (voucher === "ditraktirdemy" && harga >= 25000) {
      if ((harga * 60) / 100 >= 30000) {
        potongan = 30000;
      } else {
        potongan = (harga * 60) / 100;
      }
    }
  } else {
    potongan = 0;
  }
  const total = harga - potongan + ongkir + pajak;

  console.log(`
  Output : Harga : ${harga}
           Potongan : ${potongan}
           Biaya Antar : ${ongkir}
           Pajak : ${pajak}
           Subtotal : ${total}
           `);
}

arkFood(75000, "ARKAFOOD5", 5, true);
