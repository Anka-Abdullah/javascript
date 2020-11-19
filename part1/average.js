function rataRataUn(mtk, indo, inggris, ipa) {
    if (mtk > 100 && indo > 100 && inggris > 100 && ipa > 100){
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
    } else {
        console.log('input nilai dengan benar!')
    }
    
}

const matematika = 80
const bahasaIndonesia = 90 
const bahasaInggris = 89
const ipa = 69

rataRataUn(matematika, bahasaIndonesia, bahasaInggris, ipa)