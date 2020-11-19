function printSegitiga(numb) {
    if (typeof numb == 'number') {
        str = ''
        for (i = numb; i >=0; i--) {
            for (j = 1; j <= i; j++) {
                str += j
            }
            str += '\n'
        }
        console.log(str)
    } else {
        console.log('Data harus number')
    }
}

printSegitiga(8)
printSegitiga('enam')