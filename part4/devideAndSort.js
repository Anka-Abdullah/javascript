function devideAndSort(numb) {
  if (typeof numb !== "number") {
    console.log("parameter hanya deret angka !");
  } else {
    numb = numb
      .toString()
      .split(0)
      .map((x) => x.split("").sort().join(""))
      .join("");
    numb = parseInt(numb);
    console.log(numb);
  }
}
devideAndSort(5956560159466056);
