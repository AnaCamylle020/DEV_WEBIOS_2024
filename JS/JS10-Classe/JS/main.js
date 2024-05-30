//Class =  //é construção das propriedades  dos meus objetos "constructor" 
//objetos é composta por duas coisas
//propriedades= caracteristicas e Metodos=  funcionalidades
class Carro {
    constructor(nome,ano){ // molde de um objeto
      this.nomeCarro = nome;
      //O que esta antes do sinal de igual é uma propriedade que com o this sabemos
      //que pertece a classe e o que está depois do sinal de igual sabemos que é um paramentro
      this.ano = ano;
      //propriedades
      //isso
      //variavel nome/propriedade sempre pertecem a isso;isso o que?pertencem a classe que voce acabou de criar
      // this.arreya= [
      //   this.novo1={
      //     nome:"fixo", 
      //     ano:"teste",
      //     idade:"Vai",
      //   }
      // ]
    }
   //funcionalidades para saber quantos anos o carro;ano atual - ano da criação
   //Metodos
   anoCarro(anoAtual){
        return anoAtual- this.ano;
        //anoAtual= 2024
        //this.ano = 2012
      //propriedades
      //isso
      //variavel nome/propriedade sempre pertecem a isso;isso o que?
      //pertecem a classe que voce acabou de criar
   }
}


//significado= (this.) é um rótulo
//new=novo
//criar uma nova copia da classe =istancie
let carro1 =new Carro("Kwid",2012);
let carro2 =new Carro("MOBI",2015);
let carro3 =new Carro("HB20",2020);
console.log(Carro)
console.log(carro1)
console.log(carro2)
console.clear()

let anoAtual = new Date(); // 2024- 2012= 12
let recebeAno = anoAtual.getFullYear();
console.log(anoAtual)
console.log(recebeAno)
console.log(carro1.anoCarro(recebeAno)); // ano
//=2024