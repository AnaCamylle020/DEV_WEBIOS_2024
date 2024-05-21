//vat texto "T O V T S"
//           0 1 2 3 4 = indice
//Array Unidimensional
var numeros = [-2,40,16,111,33,64]

console.log(numeros)
console.log(numeros[3])


          //Atividade em sala//
//Crie um array unidimensional com 8 posições em todas as posições insira o nome de 8 pessoas especiais
//em sua vida.
//retorne no console a pessoa no indice 3 e 7.

var aula = ["Vanessa","anderson","abigail","ayana","joao","Danila","Fernanda","ryan"]

console.log(aula[3])
console.log(aula[7])
console.clear()

//array bidimensional adiciona 2 [ [] ] e conta apenas as linhas

var bidi = [ 
    [ 'Banana','Maça' ,'Pera'], //0
    ['Lranja',true,1], //linha 1
    //0,1,2,3
    [null,'Uva', -350,4566]//linha2
     //0    1      2   3
]
   console.log(bidi)
   console.log(bidi[0] [2]) 
   //(0.0)Primeiro linhae depois a coluna array
   //para acessar infor utilizando array bidi passamos nos conchetes o inicio da linha e depois coluna

   //Array bidi >> Exercicio Sala
   
   var mercado =[
   ["Pipoca", "arroz", "fejão", "batata"],
   ["molho de tomate", "alface", "leite em pó", "detergente"],
   ["leite de coco", "candida", "maçã", "vinagre"],
   ["bolacha", "azeite", "limao" ,"shampoo" ],
]
//

console.log(mercado[0][2])
console.log(mercado[1][3])
console.log(mercado[2][2])
console.log(mercado[3][3])

//(`´)
console.clear()

let moeda = ["Real","Euro","Coroa","Dolar"] //alatera um valor pelo o outro//

console.log(moeda)
moeda[3] ="Yen"
console.log(moeda)

console.clear()

let numArray = [2,4,6,8,10]
console.log(numArray)         //converte um array em uma string, onde os elementos do array são separados por vírgulas.>>texto
var mudanca = numArray.toString();
console.log(mudanca)

console.clear()
var teste1 = [5.10,15,20,25,30]

console.log(teste1)
var mudanca2 =teste1.join("&") // join-altera o tipo de separador e no exemplo seria a virgula(5**10...)!
var mudanca3 =teste1.toString() //texto padra
console.log ("Com o join")
console.log ( mudanca2)
console.log ("Com o toString")
console.log(mudanca3)
//var mudanca2 = teste1.join("**")
//join= transforma array em string e muda o separador dos valores  
console.clear()

let array =[0,2,3,5,7]
console.log(array.length)

console.clear()

let utilizaPop = ["Mila","Pollyana","Esther","Felippe",
                 "Lucas Nathan"]
console.log(utilizaPop)
var mudanca4 = utilizaPop.pop() //Removi
console.log(mudanca4)
console.log(utilizaPop)

var mudanca5 = utilizaPop.push("Saraiva") //push insere uma nova informação
//insere no final do array//
console.log(mudanca5)
console.log(utilizaPop)

console.clear()

// shift-Remove no inicio
var nomesCarros  = [ "Audi","Celta","Uno com escada","Hb20"]
 var  mudanca6 = nomesCarros.shift()
 console.log(mudanca6)
 console.log(nomesCarros)

 console.clear()

 //unshift insere informações no inicio

 var insereNoInicio = [34,"mano","Socorro","js"]
 delete insereNoInicio[2]

 console.log(insereNoInicio)
 



