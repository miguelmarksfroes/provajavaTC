let Nomedapessoa = document.getElementById("nome")
 let texto=document.getElementById("resposta")

 function Enviar()
{
 resposta.innerHTML="Oii, "+ Nomedapessoa.value + " tudo bem com você?";
 
}


let Numero= document.getElementById("numeros")
let proximo=document.getElementById("sucessor")
let anterior= document.getElementById("antecessor")

 function Ver()
{
sucessor.innerHTML=parseInt( Numero.value)+1;
antecessor.innerHTML=parseInt(Numero.value)-1;
}
froes= 0
    while(froes <= 50)
        {
            console.log(froes)
            froes=froes+5;
        }

        contagem= 100
    while(contagem >= 0)
        {
            console.log(contagem)
            contagem=contagem-10;
        }

        numeros=1
        while(numeros<=100)
          {
            console.log(numeros)
            numeros=numeros+1
          }

       function maior()
       {
        if(aline.value > matheus.value)
          {
            corinthians.innerHTML = aline.value + " é maior "
          }
          else 
          {
            corinthians.innerHTML = matheus.value + " é maior" 
          }
       }
       function centimetros()
{
    if(centimetros)
    {
      centimetros.innerHTML= (parseInt(centimetros.value)) /100 + "metros"
    }
}
        
        