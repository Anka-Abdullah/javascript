function palindrom(text) {
  text = text.toLowerCase();
  str = "";
  array = text.split("");
  for (i = text.length - 1; i >= 0; i--) {
    str += array[i];
  }
  if (str == text) {
    console.log("Palindrom");
  } else {
    console.log("Bukan Palindrom");
  }
}

palindrom("Malam");
palindrom("Ibu");
