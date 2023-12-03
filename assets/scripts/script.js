const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")

let horasNum = document.querySelector(".horas-num")
let minutosNum = document.querySelector(".minutos-num")
let segundosNum = document.querySelector(".segundos-num")

let segundos = 0
let minutos = 0
let horas = 0

let timer
let timerActive = false


function startTimer() {

    segundos++
    
    if (segundos == 60) {
        segundos = 0
        minutos++

        if (minutos == 60) {
            minutos = 0
            horas++
        }
    }

    segundosNum.innerHTML = segundos.toString().padStart(2,0)
    minutosNum.innerHTML = minutos.toString().padStart(2,0)
    horasNum.innerHTML = horas.toString().padStart(2,0)

}


function iniciarCronometro() {

    timer = setInterval (startTimer, 1000)
    timerActive = true

    if (timerActive == true)
    start.disabled = true

}

function stopTimer() {
    
    clearInterval(timer)
    timerActive = false
    start.disabled = false

}

function resetTimer() {
    
    clearInterval(timer)
    timerActive = false
    start.disabled = false
    segundos = 0
    minutos = 0
    horas = 0
    segundosNum.innerHTML = "00"
    minutosNum.innerHTML = "00"
    horasNum.innerHTML = "00"

}

start.addEventListener("click", iniciarCronometro)
stop.addEventListener("click", stopTimer)
reset.addEventListener("click", resetTimer)
