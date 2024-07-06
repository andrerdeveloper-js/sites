document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('ageVerificationOverlay');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    overlay.style.visibility = 'visible';

    yesButton.addEventListener('click', function () {
        overlay.style.visibility = 'hidden';
        let games = document.getElementById('game');
        games.play();
    });

    noButton.addEventListener('click', function () {
        alert('Você precisa ser maior de idade para acessar este site.');
        window.location.href = 'https://www.google.com';
    });
});

var btn = document.querySelector('.btn');
const mensagem = document.querySelector('.mensagem');
var span = document.querySelector('span');
var pergunta = document.getElementById('pergunta').value;

btn.addEventListener('click', () => {
    let sam = document.getElementById('sam');
    sam.play();
    digitar(span);
})


function digitar(span) {
    mensagem.style.display = 'block';
    let texto = span.innerHTML.split('');
    span.innerHTML = '';
    texto.forEach((letra, index) => {
        setTimeout(() => {
            mensagem.innerHTML += letra;
        }, 300 * index)
    });

    primeira()
}

function dataText() {
    const divElement = document.querySelector('.formDiv');
    if (divElement) {
        divElement.innerText = "Novo texto que você deseja enviar.";
    } else {
        console.error('Elemento não encontrado.');
    }
}

function primeira() {
    let resp = document.getElementById('pergunta').value.toLowerCase().trim();
    const mensagem = document.getElementById('mensagem');

    if (resp === '') {
        textVazio();
        return;
    }

    const idade = ["desafio"];
    const palavrasChave = ["poder", "agora", "eckhart", "28"];
    const palavrasChaveTwo = ["24", "2", "2016"];
    const palavrasChaveThree = ["38", "10", "10", "2010"]

    const resposta = resp.split(/\s+/);

    function contemPalavras(palavras, resposta) {
        return palavras.every(palavra => resposta.includes(palavra));
    }

    if (contemPalavras(idade, resposta)) {
        let conteudo = `
        "O poder sobre os outros é fraqueza disfarçada de força.
        O verdadeiro poder é interior e está à sua disposição agora.
        O medo será uma companhia constante para qualquer pessoa que esteja identificada
        com a mente e, portanto, desconectada do seu verdadeiro poder, o eu profundo enraizado
        no Ser"

        Charada:

        No livro onde o poder verdadeiro é descrito!
        Uma frase sábia é um tesouro escondido.
        Se procurares na página correta, saberás.
        Que só nome ou autor não será o suficiente.
        Mas até onde precisou chegar para sua resposta completar. !

        A sua resposta deve seguir este exemplo sempre com espaço:
        nome autor pagina
        alto da comparecida Celton Melo 10
        
    `;

        criarArquivoTxt(conteudo);

    } else if (contemPalavras(palavrasChave, resposta)) {
        let conteudoTwo = String.raw`
        Charada:
        Se, ao olhar a expressão, você se atrapalhar.
        Vá até este link, irei te ajudar!
        https://drive.google.com/file/d/13TsyzdBUt6hzrPYiRlP8GUDfLSjhRX0R/view?usp=drivesdk
        Na primeira expressão, encontre o valor de (x).  (x^2 + 15 \times 51 - 33 + 5^4 + x + 2 \times 17)
        Na segunda  expressão, encontrer o valor de (x). (2 \times x^3 - 5 \times x^2 + 4 \times 7 + 9) = 478
        Se você pegar esses dois valores de (x) e colocá-los um do lado do outro.
        você terá o valor de (x) para a terceira expressão.
        Terceira expressão: x = x da primeira expressão do lado do x da segunda expressão,
        observe não e somado e sim juntar !
        (x \times 2 + 4 \times 211 + 6^4 - x \times 2 + 91)
        Agora, para solucionar a terceira conta, usando o x da primeira expressão e segunda expressão. 

        Qual é o valor da terceira expressão?

        A sua resposta deve seguir este exemplo sempre com espaço:
        primeira expressão  segunda expressão  terceira expressão 

        290 4537 7654

    `;
        criarArquivoTxt(conteudoTwo);
    } else if (contemPalavras(palavrasChaveTwo, resposta)) {
        let conteudoThree = `

        44°29' ? "N 11°20'33.8"E

        exemplo:
        
        21°50'16"N 73°43'10"E

        Charada: 
        Qual lugar esconde onde os graus vão apontar?
        Entre o norte e o leste, seu paradeiro desvendar. 
        O número que falta é o que hoje está a comemorar. 
        Mas é o do seu companheiro que está para chegar.

        Se não achou o número, pare para pensar.
        Os anos que comemoraram e uma quantidade,
        mais os anos de alguém que chegou nas suas vidas.
        Somadas, este número vai se revelar.

        Muitas vezes, o que procuramos não está.
        Em nossa frente. Tão pouco atrás.
        Se não está à direita ou à esquerda.
        Cabe a você saber onde procurar.

        Quem mudou o tempo com um decreto sagrado,
        Reduzindo os dias no calendário tão usado,
        Dez só se foram, num gesto esperado.
        Nome e poder, por ele, são lembrados.

        Se fosse em outra época, o dia era trocado.
        Uma data muito importante em suas vidas.
        Para outra data seria marcado.

        A sua resposta deve seguir este exemplo sempre com espaço:
        o número que falta resto da resposta
        1900 anarquia colesterol 367 1500
    `;
        criarArquivoTxt(conteudoThree);
    } else if (contemPalavras(palavrasChaveThree, resposta)) {
        let game = document.getElementById('game');
        game.style.visibility = 'visible';
    } else {
        errorText();
    }

    setTimeout(() => {
        if (mensagem) {
            mensagem.innerHTML = "";
        }
        document.getElementById('pergunta').value = "";
    }, 2000);
}

function textVazio() {
    let a = document.createElement('a');
    a.textContent = 'Algo está errado, o campo está vazio';
    a.style.color = 'white';
    a.style.textDecoration = 'none';

    let downloadContainer = document.getElementById('download');
    if (downloadContainer) {
        downloadContainer.innerHTML = "";
        downloadContainer.appendChild(a);
    } else {
        console.error('Elemento com id "download" não encontrado.');
    }
}


function textVazio() {
    let a = document.createElement('a');
    a.textContent = 'Algo está errado, o campo está vazio';
    a.style.color = 'white';
    a.style.textDecoration = 'none';

    let downloadContainer = document.getElementById('download');
    if (downloadContainer) {
        downloadContainer.innerHTML = "";
        downloadContainer.appendChild(a);
    } else {
        console.error('Elemento com id "download" não encontrado.');
    }
}

function criarArquivoTxt(conteudo) {
    const blob = new Blob([conteudo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    let raioLuz = document.querySelector('.raioLuz');
    if (raioLuz) {
        raioLuz.classList.add('red');
    }
    a.href = url;
    a.download = 'teste.txt';
    a.textContent = 'Clique aqui para baixar o arquivo com as instruções do desafio.';
    a.style.color = 'white';
    a.style.textDecoration = 'none';

    const downloadContainer = document.getElementById('download');
    if (downloadContainer) {
        downloadContainer.innerHTML = "";
        downloadContainer.appendChild(a);
    } else {
        console.error('Elemento com id "download" não encontrado.');
    }

}

function errorText() {
    let a = document.createElement('a');
    a.textContent = 'Algo está errado, corrija sua resposta e tente novamente!';
    a.style.color = 'white';
    a.style.textDecoration = 'none';

    let downloadContainer = document.getElementById('download');
    if (downloadContainer) {
        downloadContainer.innerHTML = "";
        downloadContainer.appendChild(a);
    } else {
        console.error('Elemento com id "download" não encontrado.');
    }
    let raioLuz = document.querySelector('.raioLuz');
    if (raioLuz) {
        raioLuz.classList.add('red');
    }
}

function textVazio() {
    let a = document.createElement('a');
    a.textContent = 'Algo está errado, o campo está vazio';
    a.style.color = 'white';
    a.style.textDecoration = 'none';

    let downloadContainer = document.getElementById('download');
    if (downloadContainer) {
        downloadContainer.innerHTML = "";
        downloadContainer.appendChild(a);
    } else {
        console.error('Elemento com id "download" não encontrado.');
    }
}

