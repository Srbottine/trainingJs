var botao = window.document.querySelector('input#botao')
botao.addEventListener('click', resul)

function resul() {

    var tn1 = window.document.querySelector('input#txt')
    var vel = (tn1.value)
    var res = window.document.querySelector('div#res')

    if (vel == 'Brasileiro') {
        res.innerHTML = `<p>você e nascido no Brasil</p>`

    }else {

        res.innerHTML = `<p>você e estrangeiro</p>`
    }
  
}