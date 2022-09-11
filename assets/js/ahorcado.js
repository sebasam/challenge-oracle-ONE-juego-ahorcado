console.log(words)
const game = document.querySelector('.game')
const nezuko = document.querySelector('#nezuko')
const guess = document.querySelector('.guessWord')
const span = document.querySelector('span')
const badWords = document.querySelector('.badWords')
const regex = /^[a-z ]/

const aleatory = () => {
    let max = words.length
    let min = 0
    let number = Math.floor(Math.random() * ((max - min) + min))
    return words[number]
}

let aleatoryWord = aleatory()
let arrUnder = []
let arrBadWords = []
let myTry = 7
let otherWords = aleatoryWord.split('')

const generateUnderLines = () => {
    for(const word of aleatoryWord){
        arrUnder.push('_')
    }
    span.innerHTML += arrUnder.join(' ')
}

const generateGame = (key) => {
    if(regex.test(key)){          
        if(aleatoryWord.includes(key)){
            let index = []
            for(let i = 0; i <= aleatoryWord.length - 1; i++){
                if(aleatoryWord[i] == key){
                    index.push(i)
                }
            }
            for(const i of index){
                if(key == ' '){
                    key = '-'
                }
                arrUnder[i] = key
            }
            span.innerHTML = arrUnder.join(' ')
            if(arrUnder.includes('_')){
                return
            }else{
                let myIndex = aleatoryWord.indexOf(key)
                arrUnder[myIndex] = key
                span.innerHTML = arrUnder.join(' ')            
                setTimeout(() => {
                    if(confirm('Ganaste!! Quieres volver a jugar?')){
                        window.location.reload()
                    }else{
                        window.location.href = 'index.html'
                    }
                },1000)              
            }            
        }else{
            if(arrBadWords.includes(key)){
                return
            }else{
                if(key == ' '){
                    key = '-'
                }
                arrBadWords.push(key)
                badWords.innerHTML = arrBadWords.join(' ')
                myTry -= 1                
                if(myTry === 0){
                    alert(`Ups!! Perdiste, intentalo de nuevo, la palabra era ${aleatoryWord}`)
                    window.location.reload()
                }else{
                    nezuko.innerHTML = `
                    <img id="nezuko-img" src="assets/img/${myTry}.jpg" >
                `
                    return
                }
            }
        }
    }else{
        alert('Ingresa solo letras o espacios')
    }
}

generateUnderLines()

document.addEventListener("keypress", (e) => {
    generateGame(e.key)
})