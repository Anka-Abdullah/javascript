const name = [
    'Abigail', 'Alexandra', 'Alison',
'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn',
'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope'
];

function searchName(str, numb, callback) {
  str = str.toLowerCase()
  let newArray = []
  for (i=0; i < name.length; i++){
      let arr = name[i].toLowerCase().split(str).join('')
    if(arr !== name[i].toLowerCase()){
        newArray.push(name[i])
    }
  }
  callback(numb, newArray)
}

function fungsi(numb, newArray) {
    if (numb <=0){
        console.log('angka yang di input salah!')
    }else{
        output = []
        for (i = 0; i < numb; i++) {
            if (newArray[i] != undefined){
            output.push(newArray[i])
            }
        }
        console.log(output)
    }  
}

searchName("El", 5, fungsi);

