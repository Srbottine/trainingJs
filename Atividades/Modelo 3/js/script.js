var Bcheck = document.querySelector('input#Bcheck')
Bcheck.addEventListener('click', check)

function check() {
    var fin = document.querySelector('input#in')
    let tab = document.querySelector('select#res')

    if (fin.value.length == 0 ) {
        window.alert('[ERRO]')
        
    } else {
        let i = Number(fin.value)
        tab.innerHTML = ''

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${i} x ${c} = ${i*c}`
            item.value = `tab${i}`
            tab.appendChild(item)  
       }


    }

}