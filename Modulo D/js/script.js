var botao = window.document.querySelector('input#b')
botao.addEventListener('click', verificar)

function verificar(){
    
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>sua velocidade atual e ${vel}</p>`
    res.innerHTML += `<p>dirija com segurança</p>`
    
    if (vel > 60 ) {

        res.innerHTML = `<p>Voce esta multado</p>`

    }
}
