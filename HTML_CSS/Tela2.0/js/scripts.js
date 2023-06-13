function clicar(){
   let n1 = document.querySelector('input.nome')
   let s1 = document.querySelector('input.senha')
   let cs1 = document.querySelector('input.conf_senha')

   let nome1 = String(n1.value)
   let senha1 = String(s1.value)
   let conf_s1 = String(cs1.value)

  if(senha1.length && nome1.length != 0 && conf_s1.length != 0)
   {
      alert("Tudo OK!")
   }
   else{
      alert("Complete todos os campos!!")
   }
}
