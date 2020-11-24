const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "Juni",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found", []));
    }
  }, 400);
};

getMonth((res, data) => {
  if (res != null) {
    console.log(res);
  } else {
    data.map(list);
    function list(month) {
      console.log(`${month}\n`);
    return month
    }
    document.getElementById("month").innerHTML = data.map(list).join('<br><br>');
  }
});
