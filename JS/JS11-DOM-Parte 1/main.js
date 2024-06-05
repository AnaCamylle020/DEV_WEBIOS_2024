//Dom para ser acessado escreve "Document"
//link com arquivo html
//Acessar o Dom
document.title = "Times"
//document.body.style.backgroundColor="Gree" - serve para mudar cor de fundo parcido com css
//"ALert" serve para um pop-it e o "confirm" para escolher se confirmar ou nao 
//o prompt insere uma caixa de texto 
//var teste = window.pro
//se for 1> São Paulo(cor de Fundo vermelho)senão 0 corinthians(cor de fundo)

var time =prompt ("Qual o nome do time?")

if(time == "Sao Paulo" || time =="São paulo"){ 
    alert("O time é são paulo")
  document.body.style.background = "red"
  //createElement > serve para criar uma teg no html
  let nomeTime = document.createElement('h1')
  nomeTime.innerHTML = "São Paulo"- "Rogério Cenni"
  document.body.appendChild(nomeTime)
// innerHtml> Iserir uam iformação no html
}else if (time =="Corinthians"){
    alert("O time é corinthians")
    document.body.style.background = "black"
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Corinthians - Cássio"
    nomeTime.style.color = "White"
    document.body.appendChild(nomeTime)

}else(time =="Palmeiras")

    alert("O time é Palmeiras")
    document.body.style.background = "green"
    let nomeTime = document.createElement('h1')
window.prompt("Deseja Realmente sair desse Jogo?");