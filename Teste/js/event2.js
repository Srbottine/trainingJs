var tn1 = window.document.querySelector('input#txtn1')
var tn2 = window.document.querySelector('input#txtn2')
var botao = window.document.getElementById('botao')
botao.addEventListener('click', somar)

function somar() {

    var res = window.document.getElementById('res')
    var n1  = Number(tn1.value)
    var n2  = Number(tn2.value)
    var s   = n1 + n2
    res.innerHTML = `a soma entre ${n1} e ${n2} e igual a ${s} `
}