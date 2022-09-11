const container = document.querySelector('.container')
const game = document.querySelector('#game')
const nezuko = document.querySelector('#nezuko')
const guess = document.querySelector('.guessWord')
const span = document.querySelector('#spanGuess')
const badWords = document.querySelector('.badWords')
const btnGame = document.querySelector('.btn-game')
const btnInicio = document.querySelector('#btn-inicio')
const btnRegresar = document.querySelector('#btn-regresar')
const btnGenerar = document.querySelector('.btn-generar')
const btnGenerar2 = document.querySelector('#btn-generar')
const containerGenerar = document.querySelector('#container-generar')

const input = document.querySelector('#myInput')
const button = document.querySelector('#create')
const myWords = document.querySelector('.words')
const btnPlay = document.querySelector('#play')
const regex = /^[a-z ]/

myWords.innerHTML = `
            <span class="fs-1 text-success">Palabras para jugar: ${words.length}</span>
        `

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

const sendWord = () => {
    if(regex.test(input.value)){
        words.push(input.value)
        input.value = ''
        myWords.innerHTML = `
            <span class="fs-1 text-success">Palabras para jugar: ${words.length}</span>
        `
        
    }else{
        alert('Solo se permiten minúsculas y espacios')
    }
}

const generateUnderLines = () => {       
    for(const word of aleatoryWord){
        arrUnder.push('_')
    }
    span.innerHTML += arrUnder.join(' ')
}

const generateUnderLines2 = () => {       
    for(const word of aleatoryWord2){
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
                    if(alert('Ganaste!! El juego se reiniciará')){
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
                    alert(`Ups perdiste!!, la palabra era ${aleatoryWord} el juego se reiniciará`)
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



btnGame.addEventListener('click', () => {
    container.classList.add('hidde')
    game.classList.remove('hidde')
    game.classList.add('game')
    generateUnderLines()

    document.addEventListener("keypress", (e) => {
        generateGame(e.key)
    })
    
})

btnInicio.addEventListener('click', () => {
    container.classList.remove('hidde')
    game.classList.add('hidde')
    game.classList.remove('game')
    containerGenerar.classList.add('hidde')
    containerGenerar.classList.remove('generar')
})

btnGenerar.addEventListener('click', () => {
    container.classList.add('hidde')
    game.classList.remove('game')
    game.classList.add('hidde')
    containerGenerar.classList.remove('hidde')
    containerGenerar.classList.add('generar')

})

btnGenerar2.addEventListener('click', () => {
    container.classList.add('hidde')
    game.classList.remove('game')
    game.classList.add('hidde')
    containerGenerar.classList.remove('hidde')
    containerGenerar.classList.add('generar')

})

button.addEventListener('click', () => {
    sendWord()
})

btnPlay.addEventListener('click', () => {
    container.classList.remove('hidde')
    containerGenerar.classList.add('hidde')
    containerGenerar.class
})