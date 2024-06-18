// busca de CEP
//(fucsout)-ela vai indentificar quando o usário clicar fora do campo de input
//async-ela é uma funçao existenteste no java escript pra que conseguirmos fazer varias chamadas,e varios processamentos ao mesmo tempo.(execultar funçoes multiplas)
//sem que execusao de uma,interfira a outra.ela vai dar garantia que uma funcao sera feita,e a outra funçaão irá ter que esperar.
// try=para tratar informaçoes quando retornadas
//catch=para tratar informaçoes quando retonadas com erro.
//test=faz a validaçao de um valor de um campo,com um regex.
//throw=para lancar mensagens de erro se nescessario.
// Await=aguardar a consulta de ser feita na API para continuar com um fluxo codigo.
//JSon= para transformar um objeto em,JSON
//StringFy= para tranformar um JSON em objeto.
let cep = document.querySelector('#cep');
let message = document.querySelector('#erroMessage')
let rua = document.querySelector('#rua')
let complemento = document.querySelector('#complemento')
let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#uf')


cep, addEventListener('focusout', async () => {
    //sabemos  que a API pode retornar sucesso e erro
    try {
        const onlyNumbers = /^[0-9]+$/;
        const cepValid = /^[0-9]{8}$/;
        if (!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)) {
            console.log("CEP Inavlido")
            throw { cep_error: 'CEP Invalido' }
        }
        let retornoAPI = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

        console.log(retornoAPI)

        if (!retornoAPI.ok) {
            throw await retornoAPI.json();
        }

        let response = retornoAPI.json();

        console.log(response)
        cep.value = response.cep;
        rua.value = response.logradouro;
        complemento.value = response.complemento;
        bairro.value = response.bairro;
        cidade.value = response.uf;

    } catch (error) {
        if (error?.cep_error) {
            message.textContent = error.cep_error;
            setTimeout(() => {
                message.textContent = '';
            }, 5000);

            console.log(error);
        }
    }
})

