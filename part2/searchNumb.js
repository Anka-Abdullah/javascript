function searchNumb(first, last, array){
    if(first > last){
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    } else if (array.length <= 5){
        console.log('data dalam Array harus lebih dari 5')
    }else{
        str= ''
        for (i = 0; i <= array.length-1; i++){
            if (array[i] > first && array[i] < last) {
                str += array[i] + ' '
            }
        }
        console.log(str)
    }
    
}
searchNumb(5, 20, [2, 25, 4, 14, 17, 30, 8])