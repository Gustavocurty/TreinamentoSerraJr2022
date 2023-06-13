var Card = document.querySelector('.Card')

function clicar(){
    if(Card.style.display == 'inline-block'){
        Card.style.display = 'none'
    }
    else{
        Card.style.display = 'inline-block'
    } 
}