const name = [
    'Abigail', 'Alexandra', 'Alison',
'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn',
'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope'
];

function searchName(str, numb, callback) {
  console.log({ str, numb, callback });
  str = str.toLowerCase()
  let newArray = []
  for (i=0; i < name.length; i++){
      let arr = name[i].toLowerCase().split(str).join('')
      let newName = ''
    if(arr !== name[i].toLowerCase()){
        newArray.push(name[i])
    }
  }
  callback(numb, newArray)
}

function fungsi(numb, newArray) {
    newStr = ''
    for (i=0; i< numb; i++){
        newStr += newArray[i] + '  '
    }
    console.log(newStr)
}

searchName("an", 3, fungsi);
