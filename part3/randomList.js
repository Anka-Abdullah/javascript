const randomSwaping = (array) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let x
            let y
            for (i = array.length - 1; i > 0; i--) {
                x = Math.floor(Math.random() * (i + 1))
                y = array[i]
                array[i] = array[x]
                array[x] = y
            }
            if (y !== null){
                resolve(array)
            }else{
                reject(new Error('Error System'))
            }
        },300)
    })
}

const name = [
    'Jundan', 'Andrawan', 'Anka', 'Chandra',
    'Firman', 'Hasbi', 'Ivan', 'Milla', 'Ilham',
    'Risky', 'Rizqon', 'Rudy', 'Vincent'
]

randomSwaping(name)
.then((res)=>{
    for(i=0;i<name.length;i++){
        console.log(`${[i+1]}. ${res[i]}\n`)
    }
}).catch((err)=>{
    console.log(err)
})
