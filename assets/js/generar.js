const input = document.querySelector('input')
const button = document.querySelector('#create')
const myWords = document.querySelector('.words')
const btnPlay = document.querySelector('#play')

const regex = /^[a-z ]/

myWords.innerHTML = `
            <span class="fs-1 text-success">Palabras para jugar: ${words.length}</span>
        `

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

button.addEventListener('click', () => {
    sendWord()
})

btnPlay.addEventListener('click', () => {
    
})