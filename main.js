let cennik = {
    Regulacja: 5,
    Piling: 45,
    Masaz: 20,
    Maska:30
}

document.querySelector("#przycisk").addEventListener('click',()=>{
    cena = 0
    let chk = document.querySelectorAll('input[type="checkbox"]:checked')
    for(i in chk ){
            if (cennik[chk[i].id] != undefined){
                cena += cennik[chk[i].id]
            } 
    }
    
    document.querySelector('.odp').innerHTML = `Cena zabiegów: ${cena}`
})