function printSegitiga(numb) {
    if (typeof numb == 'number') {
        str = ''
        for (i = 1; i <= numb; i++) {
            for (j = i; j <= numb; j++) {
                str += j
            }
            str += '\n'
        }
        console.log(str)
    } else {
        console.log('Data harus number')
    }
}

printSegitiga(5)
printSegitiga('enam')