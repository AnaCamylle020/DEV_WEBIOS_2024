//getElementById
//innerText>Insere um novo texto
let primeiroTitulo = document.getElementById
("primeiroTitulo")

primeiroTitulo.style.color='brown';
primeiroTitulo.innerText ='goodbye';

//getElementeByClassName
 let pegaClasse = document.getElementsByClassName
 ('getclasse')

//  paragrafo[1].style.color = 'red';

for(i = 0; i < pegaClasse.length; i ++){
    pegaClasse[i].style.color ='blue'
}
 console.log(pegaClasse);
 console.clear()

 //getElementsByName
 let byName = document.getElementsByName("filho");

 console.log(byName);

 byName.forEach(funcao)

 //[90,60,50]
 //priemeiro paramentro é a referencia aos valores do meu array
 //segundo paranmetro referente ao indice
 function funcao(cont,indice){
    return byName[indice].style.color= "pink"
 }

 console.clear()
 //getElementsByTag
 let byTagName = document.getElementsByTagName("p");

 for(c = 0; c < byTagName.length; c++){
    byTagName[c].style.color = '#FF4500'
    byTagName[c].style.fontSize = '30px'
    byTagName[c].style.boxShadow =' 5px 2px 10px #000000'
    if(c % 2)byTagName[c].style.backgroundColor = '#fff'

 }

 //OUTRO EXEMPLO 
 //if(c % 2 == 0){
// byTagName[c].style.backgroundColor = '#FFFF00'
//{else }
//bytagName[c].style.backgroudColor = '#fff'
//}
let removendo = document.getElementById('remove1')
removendo.remove()

console.log()


let recebeLista = document.getElementById(pailista)

recebeLista.style.listStyle ='none'