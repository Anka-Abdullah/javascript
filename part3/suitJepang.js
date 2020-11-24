// [1]
const guntingBatuKertas = (suit) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let computer;
      if (Math.random() >= 2 / 3) {
        computer = "gunting";
      } else if (Math.random() >= 1 / 3) {
        computer = "batu";
      } else {
        computer = "kertas";
      }
      console.log(`Computer : ${computer}\nAnda: ${suit}\n`);
      suit = suit.toLowerCase();
      if (suit === "gunting" || "batu" || "kertas") {
        if (suit === computer) {
          resolve(`Hasil Seri`);
        } else {
          if (suit === "gunting") {
            switch (computer) {
              case "kertas":
                resolve(`Anda Menang!!`);
                break;
              case "batu":
                resolve(`Anda Kalah!!`);
                break;
            }
          }
          if (suit === "batu") {
            switch (computer) {
              case "gunting":
                resolve(`Anda Menang!!`);
                break;
              case "kertas":
                resolve(`Anda Kalah!!`);
                break;
            }
          }
          if (suit === "kertas") {
            switch (computer) {
              case "batu":
                resolve(`Anda Menang!!`);
                break;
              case "gunting":
                resolve(`Anda Kalah!!`);
                break;
            }
          }
        }
      } else {
        reject(new Error(`Error System!`));
      }
    }, 300);
  });
};

const a = "Gunting";
const b = "Batu";
const c = "Kertas";

guntingBatuKertas(c)
  .then((res) => {
    console.log(res);
    console.log("==========================\n\n");
  })
  .catch((err) => {
    console.log(err);
  });

guntingBatuKertas(b)
  .then((res) => {
    console.log(res);
    console.log("==========================\n\n");
  })
  .catch((err) => {
    console.log(err);
  });

guntingBatuKertas(a)
  .then((res) => {
    console.log(res);
    console.log("==========================\n\n");
  })
  .catch((err) => {
    console.log(err);
  });
