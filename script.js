let hora = new Date().getHours()
let img = window.document.getElementById('imagem')
let titulo = window.document.querySelector('div#titulo')
titulo.innerHTML = `Agora são ${hora} horas`

if(hora > 6 && hora <= 12){
    console.log("manhã")
    img.src = "manhã.jpg"
    document.body.style.background = "#acb7b7"
}else if (hora > 12 && hora <= 18){
    console.log("tarde")
    img.src = "tarde.jpeg"
    document.body.style.background = "#e27a23"
}else if (hora > 18 && hora <=24){
    console.log("noite")
    img.src = "noite.jpg"
    document.body.style.background = "#4c535c"
}else if (hora >= 0 && hora <= 6){
    console.log("madrugada")
    img.src = "madrugada.jpg"
    document.body.style.background = "#101c2c"
}
