//Concatenar String
var string  = "Os alunos estão"
var string2 = "Reprovados"
var string3 = "aprovados"
var OlhaAi  = "ou reprovados"
var num1 =2
var num2 =4

// + >> soma ou concatenação
console.log(string + string2 + string3)

//template string
console.log(`${string,string2,string3 +(num1+num2) + OlhaAi}`)
//concatenar string e faz aao mesmo tempo contas matematicas 

console.clear()
//criar uma vareavel que vai receber o seguinte texto IOS fez uma excersão na TOTVS com tres cabritinhos(alunos)

//IOS -TOTVS S
//0124678910

var texto1 = "IOS fez uma excursão na TOTVS com tres cabritinhos ( alunos)"
console.log(texto1.charAt(23));//igual o de baixo
console.log(texto1 [27]);  //modo diferente mas é igual

console.clear()

//tamanho string
var texto2 ="IOS"
var texto3 ="Está chovendo hamburguer"

console.log(`na variavel texto2 tem ${texto2.length}caracteres`)
console.log(`na variavel texto3 tem ${texto3.length}carateres`)
//outro exemplo console.log (`na variavel texto3 tem + texto3.length + caracteres`)

var nome = "João"
console.log (nome.length)

console.clear ()

var texto4 ="aqui esta em minusculo"
var texto5 ="AQUI ESTA EM MAIUSCULO"

console.log(`Minusculo: ${texto5.toLowerCase()}`
)
console.log(`Maiusculo: ${texto4.toUpperCase()}`)
//up - Crescer
//Low- Diminuir

var nomeUsuarioFacebook  ="PkninaDaZl"
console.log(nomeUsuarioFacebook.toUpperCase())

console.clear()

var str = "Mozilla"
//M O Z I L L A
//0 1 2 3 4 5 6

console.log(str)
console.log(str.substring(1,3)) //O Z 3 seria para parar e voltar uma casa
console.log(str.substring(3))  //subtring= significa subtrair

console.clear()

var texto6 = "Olha a pipoca"
console.log(texto6)
console.log(texto6.replace('pipoca','Carreta furacao')) //replace substituir um textou pelo o outro

console.clear()

var texto7 =   "  Olha a Carreta     "


console.log (texto7)
console.log ( texto7.trim()) // o (trim) é pra retirar espaços em brancos,no inicio e no fim da sua string.



