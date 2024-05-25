//metodo ForEach//insira 6 frutas
let frutas =[ 'maçã','laranja','framboesa','melão',
'banana','tomate',]
frutas.forEach(retornaInfo);          //funçao // 
function retornaInfo(nomeFruta, indice){
console.log(`nomeFruta: ${nomeFruta}`)
console.log(`indice: ${indice}`)}


frutas.forEach((nomeFruta, indice) =>{  //sem uso de fuçao
 console.log(`nomeFruta: ${nomeFruta}`)
 console.log(`indice: ${indice}`)
})
frutas.forEach(( teste,indice,)=> console.log(teste,indice))
//Arrow Fuction

console.clear()
let tarefa= [ //<<array

{//0
    id:1,
    isPronta: true,
    nomeTarefa: "Pular Corda"
},
{//1
    id:2,
    isPronta: false, 
    nomeTarefa:"Correr de cachorro"
  },
  {//2
    
    id:3,
    isPronta:false,
    nomeTarefa:"Nadar em pisicna"
},
]

//Arrow fuction

tarefa.forEach(( tarefa)=> console.log( tarefa.nomeTarefa))
//metodo map ele cria um novo array,pra receber uma mudança.Ela faz uma copia desse array,aplica a mudanca Percorrer o seu array.

console.clear()
//Metodo Map
let numeros = [4,9,16,25]
let novoArray = numeros.map(Math.sqrt) //(Math)é um objeto,ele ja faz contas matematicas de forma muito mais rapida
console.log("Array antigo"+ numeros)
console.log("novoArray"+ novoArray)

let mapText= tarefa.map((retornaText)  =>{
  console.log(retornaText.nomeTarefa)
})
console.clear()

//Metodo filter
let numeros2 =[ 3, 13, 24, 36, 47, 50, 60, 78, 89] //todos os metodos eles tem em comum que é percorrer um array
                                                       //ele cria uma nova vareavel
let resultado =numeros2.filter(retornaFiltro)

function retornaFiltro(num){
    return num > 30
}
console.log(resultado)

let tarefaFiltro= tarefa.map((resultadoFiltro)=>{
    return resultadoFiltro.isProta ===false
})
console.log (tarefaFiltro)
console.clear()

//metodo find-conseguimos  

let sapatos = [
    {marca: "Nike",quantidade: 3},
    {marca:"Adidas",quantidade: 5},
    {marca:"Puma", quantidade: 7}
]
console.log(
    sapatos.find((retornaFind) => {
    return retornaFind.marca =="Puma"
})
)
