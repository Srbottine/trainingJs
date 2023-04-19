var agora =  new Date()
var time =  agora.getHours()
console.log(`agora são exatamente ${time} horas`)

if (time < 12) {

    console.log('Bom dia')

} else if ( time <= 18) {

    console.log('Bom tarde')

}else {

    console.log('Boa noite')

}