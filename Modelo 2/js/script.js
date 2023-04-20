function check() {

    var date = new Date()
    var year = date.getFullYear()
    var txtyear = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (txtyear.value.length == 0 || Number(txtyear.value) > year) {

        window.alert('[ERRO]ano invalido')

    } else {

        var fsex = document.getElementsByName('radsex')
        var age = year - Number(txtyear.value)
        var genery = ''
        
        if (fsex[0].checked) {
            genery = 'homem'  

        } else if (fsex[1].checked) {
            genery = 'mulher'  

        }
       
    }
}