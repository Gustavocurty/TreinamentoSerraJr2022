let cont = 0

function clicar(){
    let numero_1 = document.querySelector(".numero")

    if(cont >= 4){
        alert("A capacidade máxima foi atingida!!")
    }
    else{
        cont++
        numero_1.innerHTML = +cont
    }
}


