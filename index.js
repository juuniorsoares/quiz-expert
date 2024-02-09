
const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "let myVar = 10;",
            "variable myVar = 10;",
            "var myVar = 10;"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é utilizado para imprimir algo no console em JavaScript?",
        respostas: [
            "log()",
            "print()",
            "console.log()"
        ],
        correta: 2
    },
    {
        pergunta: "Como se chama a estrutura de controle que permite executar repetidamente um bloco de código em JavaScript?",
        respostas: [
            "if-else",
            "for loop",
            "switch"
        ],
        correta: 1
    },
    {
        pergunta: "O que o operador '===' verifica em JavaScript?",
        respostas: [
            "Valor e tipo",
            "Apenas o valor",
            "Apenas o tipo"
        ],
        correta: 0
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        respostas: [
            "function myFunction() {}",
            "var myFunction = function() {}",
            "myFunction: function() {}"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
        respostas: [
            "Selecionar um elemento pelo ID",
            "Selecionar elementos por classe",
            "Selecionar um elemento pelo seletor CSS"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado da expressão '3 + '3' em JavaScript?",
        respostas: [
            "6",
            "33",
            "Erro"
        ],
        correta: 1
    },
    {
        pergunta: "Como você comenta uma única linha de código em JavaScript?",
        respostas: [
            "// Comentário",
            "/* Comentário */",
            "<!-- Comentário -->"
        ],
        correta: 0
    },
    {
        pergunta: "O que é JSON em JavaScript?",
        respostas: [
            "Uma linguagem de programação",
            "Uma biblioteca",
            "Um formato de dados"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado da expressão 'true && false' em JavaScript?",
        respostas: [
            "true",
            "false",
            "Erro"
        ],
        correta: 1
    }
];

const template = document.querySelector('template') //adicionando o conteudo da tag " TEMPLATE " dentro da variavel template
const quiz = document.querySelector('#quiz') //buscando a div com o id " #QUIZ "

const corretas = new Set()
const totaldePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totaldePerguntas

// lop ou laço de repetição
for (const item of perguntas) { //fazendo um loop de repetição para mostrar todas as perguntas do " ITEM PERGUNTAS "
    const quizItem = template.content.cloneNode(true) //clonado todo coteudo da template
    quizItem.querySelector('h3').textContent = item.pergunta // mudando o conteudo do "H3" para as perguntas do " ITEM PERGUNTA "

    for (let resposta of item.respostas) { //fazendo um loop infintito para mostar as respotas 
        const dt = quizItem.querySelector('dl dt').cloneNode(true) //clonando o conteudo das tags "DL e DT"
        dt.querySelector('span').textContent = resposta //mudando o conteudo do span para as respostas do " ITEM RESPOSTAS "
        dt.querySelector('input').setAttribute('name', 'perguntas' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size  + ' de ' + totaldePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt) //adicionando o conteudo modificado da " DT " na dela
    }

    quizItem.querySelector('dl dt').remove() //Removendo conteudo antigo das tags " DT e DL "

    quiz.appendChild(quizItem) //coloca a pergunta na tela
}