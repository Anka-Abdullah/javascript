function rever(text) {
    str = ''
    array = text.split(' ')
    for (i = array.length - 1; i >= 0; i--) {
        str += array[i] + ' '
    }
    
    console.log(str)
}

rever('Saya Belajar Javascript')