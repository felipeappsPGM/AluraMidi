const btnPom = document.querySelector('.tecla_pom');
const audioPom = document.getElementById('som_tecla_pom');
btnPom.addEventListener('click', () => {
    tocaSomPom();
});

function tocaSomPom(){
    audioPom.play();
}
