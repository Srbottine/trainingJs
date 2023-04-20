var Bcheck = document.querySelector('input#Bcheck')
Bcheck.addEventListener('click', check)

function check() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert(`[ERRO] data errada`)

    } else {
        var fsex = document.getElementsByName('radsex')
        var fage = year - Number(fyear.value)
        var genery = ''

        if (fsex[0].checked) {
            genery = 'Homem'

        } else if (fsex[1].checked) {
            genery = 'Mulher'
        }
        
        res.innerHTML = `${genery}, ${fage}`

    } 

}