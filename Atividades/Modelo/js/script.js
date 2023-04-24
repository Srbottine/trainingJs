function load() {

var msg = window.document.querySelector('div#msg')
var photo = window.document.querySelector('div#photo')
var good = window.document.querySelector('h1#msg1')

var date = new Date()
var hours = date.getHours()

msg.innerHTML = `Agora são ${hours} horas.`

if (hours >= 0 && hours < 12) {
    good.innerHTML = 'Bom Dia'
    photo.style.background = 'crimson'
    document.body.style.background = 'crimson'

} else if (hours >= 12 && hours < 18) {
    good.innerHTML = 'Boa Tarde'
    photo.style.background = 'orangered'
    document.body.style.background = 'red'

} else {
    good.innerHTML = 'Boa Noite'
    photo.style.background = 'violet'
    document.body.style.background = 'violet'

}

}
