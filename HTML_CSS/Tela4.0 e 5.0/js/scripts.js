function clicar(){
    var Texto = document.querySelector('.Digitado')
    var item = String(Texto.value)
    var a = document.querySelector('.Elementos')

    //alert(`${item.length}`)
    if(item.length == 0){
        alert("Acrescente algo na lista!")
    } else{
        a.innerHTML = a.innerHTML + `<strong>Tarefa:</strong> ${item}<br>`
        
    }
}