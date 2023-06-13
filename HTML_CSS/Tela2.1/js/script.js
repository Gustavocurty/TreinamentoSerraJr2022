function somar(){
    let txn1 = document.querySelector('input.soma_n1')
    let txn2 = document.querySelector('input.soma_n2')
    let n1 = Number(txn1.value)
    let n2 = Number(txn2.value)
    let s = n1 + n2

    var res = document.querySelector('.resposta')
    res.innerHTML = `A soma vale ${s}`
}

function subtracao(){
    let txn1 = document.querySelector('input.sub_n1')
    let txn2 = document.querySelector('input.sub_n2')
    let n1 = Number(txn1.value)
    let n2 = Number(txn2.value)
    let s = n1 - n2

    var res = document.querySelector('.resposta_2')
    res.innerHTML = `A subtração vale ${s}`
}

function multiplicacao(){
    let txn1 = document.querySelector('input.mult_n1')
    let txn2 = document.querySelector('input.mult_n2')
    let n1 = Number(txn1.value)
    let n2 = Number(txn2.value)
    let s = n1 * n2

    var res = document.querySelector('.resposta_3')
    res.innerHTML = `A multiplicação vale ${s}`
}

function divisao(){
    let txn1 = document.querySelector('input.div_n1')
    let txn2 = document.querySelector('input.div_n2')
    let n1 = Number(txn1.value)
    let n2 = Number(txn2.value)
    let s = n1 / n2

    var res = document.querySelector('.resposta_4')
    res.innerHTML = `A divisão vale ${s.toFixed(2)}`
}
