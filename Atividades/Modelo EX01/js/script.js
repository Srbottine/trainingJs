var Bcheck = document.querySelector('input#Bcheck')
Bcheck.addEventListener('click', check)

function check() {
    var fin = document.querySelector('input#in')
    var end = document.querySelector('input#end')
    var count = document.querySelector('input#count')
    var res = document.querySelector('div#res')

    if (fin.value.length == 0 || end.value.length == 0 || count.value.length == 0) {

        res.innerHTML = 'impossivel contar'
        
    } else {
        res.innerHTML = 'contando: '
        var i = Number(fin.value)
        var f = Number(end.value)
        var c = Number(count.value)
        if (c <= 0) {
            window.document('passo invalido')
            c = 1
        }
        if (i < f) {

            for (var x = i; x <= f; x += c) {
                res.innerHTML += `${x} \u{1F47E}`
            }

        } else {

            for (var x = i; x >= f; x -= c) {
                res.innerHTML += `${x} \u{1F47E}`
            }

        }
        
    }

} 