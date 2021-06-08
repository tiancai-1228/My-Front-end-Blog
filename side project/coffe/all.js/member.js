const reg =document.querySelector('.reg')
const log =document.querySelector('.log')
const regcont =document.querySelector('.reg-content')
const logcont =document.querySelector('.log-content')


function golog(e){
    e.preventDefault();
    log.style.color = 'black';
    reg.style.color = 'gray';
    regcont.style.display="none";
    logcont.style.display="flex";
}

function goreg(e){
    e.preventDefault();
    log.style.color = 'gray';
    reg.style.color = 'black';
    logcont.style.display="none";
    regcont.style.display="flex";
}



log.addEventListener('click',golog)
reg.addEventListener('click',goreg)
