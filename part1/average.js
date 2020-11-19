function rataRataUn(mtk, indo, inggris, ipa) {
    const average = (mtk + indo + inggris + ipa) / 4
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

const matematika = 80
const bahasaIndonesia = 90 
const bahasaInggris = 89
const ipa = 69

rataRataUn(matematika, bahasaIndonesia, bahasaInggris, ipa)