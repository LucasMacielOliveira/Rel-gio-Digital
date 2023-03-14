const horas = document.getElementById ('horas')
const minutos = document.getElementById ('minutos')
const segundps = document.getElementById ('segundos')


const relogio = setInterval (function time(){
    let dateToday = new Date();
    let hrs = dateToday.getHours()
    let minuts = dateToday.getMinutes()
    let secs = dateToday.getSeconds()


    if(hrs < 10) hrs = 0 + hrs
    if(minuts < 10) minuts = 0 + minuts
    if(secs < 10) secs = 0 + secs

    horas.textContent = hrs;
    minutos.textContent = minuts
    segundos.textContent = secs

})