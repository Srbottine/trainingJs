var area = window.document.getElementById('area')
area.addEventListener('click', clicar)

function clicar() {
    area.innerText = 'clicou'
    area.style.background = 'red'
}
