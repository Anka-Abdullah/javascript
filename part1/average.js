function rataRataUn(mtk, indo, inggris, ipa) {
    const average = (mtk + indo + inggris + ipa) / 4
    if (mtk > 100 || indo > 100 || inggris > 100 || ipa > 100 || 
        mtk < 0 || indo < 0 || inggris < 0 || ipa < 0) {
        console.log('masukkan nilai dengan benar!')
    }else{
        if (average >= 90) {
            console.log(`Rata-rata: ${average}\nGrade : A`)
        } else if (average >= 80) {
            console.log(`Rata-rata: ${average}\nGrade : B`)
        } else if (average >= 70) {
            console.log(`Rata-rata: ${average}\nGrade : C`)
        } else if (average >= 60) {
            console.log(`Rata-rata: ${average}\nGrade : D`)
        } else {
            console.log(`Rata-rata: ${average}\nGrade : E`)
        }
    }
}




const matematika = 90
const bahasaIndonesia = 90
const bahasaInggris = 90
const ipa = 89

rataRataUn(matematika, bahasaIndonesia, bahasaInggris, ipa)