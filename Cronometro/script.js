let sec= 0
let min= 0
let mls= 0
let interval

let clickStart= document.querySelector('.start')
clickStart.addEventListener('click', start)

let clickZerar= document.querySelector('.zerar')
clickZerar.addEventListener('click', stop)

let clickPausar= document.querySelector('.pausar')
clickPausar.addEventListener('click', pause)



function start(){
    relogio()
     interval= setInterval(relogio, 10)
}


function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.querySelector('.timer').textContent= '00:00:00'


}

function pause(){
    clearInterval(interval)
}

function relogio(){
    //sec++
       /* if(sec===60){
            min++
            sec=0
        }
        */
    mls++  
    if(mls>99){sec++; mls=0}
    if(sec==60){min++; sec=0}
    

    document.querySelector('.timer').textContent= dois(min)+ ':' +dois(sec)+ ':'+ dois(mls)

}

function dois(digito){
    if(digito<10){
        return('0'+digito)
    }

    else{
        return (digito)
    }

}
