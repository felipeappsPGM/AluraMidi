const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(id){
    const elemento = document.querySelector(id);
    if(elemento.localName === 'audio' && elemento !== null){
        
        elemento.play();
        
    }else{
        console.log('elemento não encontrado');
    }
    
}

for(let i = 0; i < listaDeTeclas.length; i++){
    const param = `#som_${listaDeTeclas[i].classList[1]}`;
    listaDeTeclas[i].onclick = () => {tocaSom(param);}

    listaDeTeclas[i].onkeydown = (evento) => {
        if(evento.code === 'Space'|| evento.code === 'Enter')
        listaDeTeclas[i].classList.add('ativa');
    }

    listaDeTeclas[i].onkeyup = () => {
        listaDeTeclas[i].classList.remove('ativa');
    }
}
