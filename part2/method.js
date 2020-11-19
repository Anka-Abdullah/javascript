console.log('\n')


//1 toString() mereturn nilai constiabel menjadi string
const x = 123;
const y = x.toString()
console.log(`1. toString() : ${y}\n`);

//2 search() mencari string untuk nilai yang ditentukan, dan mereturn posisi kecocokan
const str = "Please locate where 'locate' occurs!";
const pos = str.search("locate");
console.log(`2. search() :${pos}\n`)

//3 replace() mengganti nilai yang ditentukan dengan nilai lain dalam string
const string = "Please visit Microsoft";
const text = string.replace("Microsoft", "My Home");
console.log(`3. replace() : ${text}\n`)

//4 charAt()  mengembalikan karakter pada indeks tertentu dalam string
const hello = "HELLO WORLD";
const world = hello.charAt(0);
console.log(`4. charAt() : ${world}\n`)

//5 pop() menghapus elemen terakhir dari array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(`5. ${fruits}\n`)

// 6 push() menambah element baru pada sebuah array
const transportation = ['train', 'car', 'motorcycle']
transportation.push('kaleng khong guan')
console.log(`6. ${transportation}\n`)

//7 shift() menghapus elemen pertama pada sebuah array
const transportations = ['train', 'car', 'motorcycle', 'kaleng khong guan']
transportations.shift()
console.log(`7. ${transportations}\n`)

//8 toFixed() menentukan berapa angka di belakang koma
const number = 145.7875252378
const newNumber = number.toFixed(1)
console.log(`8. ${newNumber}\n`)

//9 mereturn array yang diisi dengan semua elemen array yang lulus tes (disediakan sebagai fungsi)
const ages = [32, 33, 16, 40];
function checkAdult(age) {
    return age >= 18;
}
const check = ages.filter(checkAdult)
console.log(`9. ${check}\n`)

//10. mereturn array baru dengan hasil pemanggilan fungsi untuk setiap elemen array
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
function myFunction(num) {
    return num * 10;
}
console.log(`10. ${newArr}\n`)