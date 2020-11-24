const cekHariKerja = (day) => {
  return new Promise((resolve, reeject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reeject(new Error("Hari ini bukan hari kerja"));
      }
    }, 300);
  });
};

const dayList = [
  "senin",
  "selasa",
  "rabu",
  "kamis",
  "jumat",
  "sabtu",
  "minggu",
];

//try catch digunakan untuk mengatasi error handling pada async await
async function dayCheck(day) {
  let correct = dayList.find((item) => {
    return item === day.toLowerCase();
  });
  if (!correct) {
    console.log("input hari dengan benar!");
  } else {
    try {
      let result = await cekHariKerja(day);
      console.log(`Hari ${result} adalah HARI KERJA`);
    } catch (error) {
      console.log(error);
    }
  }
}
dayCheck("MinggU");

//then catch digunakan untuk menghandle output yang dihasilan oleh promise
const hari = "senin";
cekHariKerja(hari)
  .then((res) => {
    console.log(`Hari ${res} adalah HARI KERJA`);
  })
  .catch((err) => {
    console.log(err);
  });
