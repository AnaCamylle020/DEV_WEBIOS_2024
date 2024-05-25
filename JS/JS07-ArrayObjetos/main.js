//Objetos
let pessoa= {
    corDosOlhos: "verde",
    altura:1.70,
    corDeCabelo:"Preto",
    nome: "Caio",
    sobrenome:"Maciel",
    hobbie:["Futebol","Lol","Tocar bateria"],
             //0       1        2
    //criar outro objeto
    endereço:{
        rua:"Joao Medeiro",
        numero:234,
        cidade:"São Pualo",
        estado:"SP"
    } 
}
console.log(pessoa)
console.log(pessoa.nome)  //retornar apenas apenas uma propriedade
console.log(pessoa.hobbie)  //retornar todos os hobbies
console.log(pessoa.hobbie[1])  //retornar apenas um robbie em -especifico
console.log(pessoa.endereço)  //retonar todo o endereço
console.log(pessoa.endereço.estado)//retornar apenas uma informacao dentro de endereco          
//como retornar o objeto no console.log  exemplo:chamar a variavel que esta recebendo o objetto no caso"pessoa.e"nome"
//Obs:(tudo que é da vida real,nos abstrai para programção e vira objetos//
//multiplas tarefas colocar dentro de um array
//   exemplo:{

//},
console.clear()
//dentro de array podemos criar varios objetos//
//Criei mais de 2 objetoscom duas tarefas diferentes,uma dessas terefas terá a propriedade isPronta com o valor false
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
}
]
console.log(tarefa)
console.log(tarefa[1])//retornar um objeto
console.log(tarefa[1].nomeTarefa)//retornar uma unica propriedade de um objeto

console.clear()

let recebeJAISON = JSON.stringify(pessoa); //é um objeto dentro do jaison eu tenho metodos, esses metodos tranforma do meus java o proprio jaison
console.log(pessoa)
console.log(recebeJAISON)

console.clear()

var JSONITO = '{"corDosOlhos":"verde","altura":1.7,"corDeCabelo":"Preto","nome":"Caio","sobrenome":"Maciel","hobbie":["Futebol","Lol","Tocar bateria"],"endereço":{"rua":"Joao Medeiro","numero":234,"cidade":"São Pualo","estado":"SP"}}'

console.log(JSONITO)
console.log(JSON.parse(JSONITO)) //
 
