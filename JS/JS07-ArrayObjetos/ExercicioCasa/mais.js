let alunos =[
  aluno1= {
    nome:"Ana",
    idade:"17",
    nota :"8",
    ano:"2B"
  },
   aluno2={
        nome: "Bruno",
        idade: 16,
        nota: 6,
        ano: "2C"
    },
    aluno3={
        nome: "Veronica",
        idade: 16,
        nota: 9,
        ano: "2B"
    },
    aluno4={
        nome: "Marta",
        idade: 15,
        nota: 5,
        ano: "3C"
    },
    aluno5={
        nome: "Brenno",
        idade: 19,
        nota: 8,
        ano: "3C"
    },
    aluno6={
        nome: "maria",
        idade: 14,
        nota: 4,
        ano: "1F"
    },
];

console.log (alunos);
console.log (aluno2);
console.log (aluno6.nota);

var jason = JSON.stringify(alunos);
console.log (jason);