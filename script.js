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
var pergunta = document.getElementById('pergunta').value;
let contadorRespostasCorretas = 0;

btn.addEventListener('click', () => {
    let sam = document.getElementById('sam');
    sam.play();
    primeira()
})

function dataText() {
    const divElement = document.querySelector('.formDiv');
    if (divElement) {
        divElement.innerText = "Novo texto que você deseja enviar.";
    } else {
        console.error('Elemento não encontrado.');
    }
}

function _0xc499(_0x31cdf1, _0x3f554e) {
    const _0x211e47 = _0x342b();
    return _0xc499 = function (_0x5be75f, _0x30c5e8) {
        _0x5be75f = _0x5be75f - (-0x1c3 * 0xd + 0xb * -0x204 + 0x2e4c);
        let _0x5503e3 = _0x211e47[_0x5be75f];
        return _0x5503e3;
    }, _0xc499(_0x31cdf1, _0x3f554e);
}
(function (_0x342714, _0x2ce30e) {
    const _0x3bb450 = _0xc499, _0x312f77 = _0x342714();
    while (!![]) {
        try {
            const _0x21a9ef = -parseInt(_0x3bb450(0x142)) / (-0xd8a + -0x270c + 0x3497) * (parseInt(_0x3bb450(0x162)) / (0xabd + -0xe9 + -0x9d2)) + parseInt(_0x3bb450(0x154)) / (0x1625 + -0x16de + -0x2 * -0x5e) + parseInt(_0x3bb450(0x146)) / (0x1b0c + 0x257f + -0x4087) * (-parseInt(_0x3bb450(0x153)) / (-0x1338 + 0x1171 + 0x1cc)) + -parseInt(_0x3bb450(0x147)) / (-0x12d8 + -0x503 + 0x1 * 0x17e1) * (parseInt(_0x3bb450(0x163)) / (0x205b + 0x50e * -0x6 + -0x2 * 0x100)) + parseInt(_0x3bb450(0x139)) / (-0xeb7 * -0x1 + 0x5f7 * 0x3 + -0x2094) * (-parseInt(_0x3bb450(0x15d)) / (0xdd2 + 0x1e4d + -0x2c16)) + -parseInt(_0x3bb450(0x13f)) / (0x1eb6 + 0x138f + -0x323b) + parseInt(_0x3bb450(0x160)) / (0x1e31 + 0x22f8 + -0x411e);
            if (_0x21a9ef === _0x2ce30e)
                break;
            else
                _0x312f77['push'](_0x312f77['shift']());
        } catch (_0xd0f78c) {
            _0x312f77['push'](_0x312f77['shift']());
        }
    }
}(_0x342b, -0x13c3a * 0x5 + -0x30049 * -0x1 + 0x1 * 0x7a941));
function _0x342b() {
    const _0x1c84ea = [
        'value',
        'DOtDH',
        'sHxup',
        '2010',
        'PzEgu',
        '3277670RQQaof',
        'gckFC',
        'desafio',
        '189bOCLlj',
        'innerHTML',
        'Yfmud',
        'poder',
        '88148nQEPTs',
        '2154LCaUds',
        'iuIom',
        'trim',
        'nUXWm',
        'ciYym',
        'EIXjd',
        'VFbkB',
        'QiJTr',
        '2016',
        'split',
        'mensagem',
        'IkrlL',
        '110zLtsoL',
        '201090VNLVmY',
        'toLowerCas',
        'every',
        'pergunta',
        'agora',
        'RbsaW',
        'EijCF',
        'MvrUs',
        'ById',
        '585axuzuj',
        'getElement',
        'ueDIE',
        '19503616sGzfRB',
        'fiKvO',
        '4636WUynxd',
        '4333oTbAhs',
        'eckhart',
        'includes',
        'LPSxI',
        '9008ACYzKh'
    ];
    _0x342b = function () {
        return _0x1c84ea;
    };
    return _0x342b();
}

function primeira() {
    const _0x164de2 = _0xc499, _0x5e0aa1 = {
            'fiKvO': _0x164de2(0x157),
            'LPSxI': _0x164de2(0x151),
            'IkrlL': function (_0x38c95f, _0x2aa284) {
                return _0x38c95f === _0x2aa284;
            },
            'gckFC': function (_0x345a4c) {
                return _0x345a4c();
            },
            'QiJTr': _0x164de2(0x141),
            'PzEgu': _0x164de2(0x145),
            'Yfmud': _0x164de2(0x158),
            'EijCF': _0x164de2(0x164),
            'RbsaW': _0x164de2(0x14f),
            'MvrUs': _0x164de2(0x13d),
            'DOtDH': function (_0x3cdd7d, _0x35d5d0, _0x1490b4) {
                return _0x3cdd7d(_0x35d5d0, _0x1490b4);
            },
            'EIXjd': function (_0x11596e) {
                return _0x11596e();
            },
            'nUXWm': function (_0x5e87b0, _0x476822, _0x23228f) {
                return _0x5e87b0(_0x476822, _0x23228f);
            },
            'iuIom': function (_0x587d69, _0xb3c6d6) {
                return _0x587d69 === _0xb3c6d6;
            },
            'ueDIE': function (_0x222e4a, _0x4604c1, _0x1ee2b3) {
                return _0x222e4a(_0x4604c1, _0x1ee2b3);
            },
            'VFbkB': function (_0x412312, _0x4a9ff9) {
                return _0x412312 === _0x4a9ff9;
            },
            'sHxup': function (_0x343d7b) {
                return _0x343d7b();
            },
            'ciYym': function (_0x2a088c) {
                return _0x2a088c();
            }
        };
    let _0xa8aa10 = document[_0x164de2(0x15e) + _0x164de2(0x15c)](_0x5e0aa1[_0x164de2(0x161)])[_0x164de2(0x13a)][_0x164de2(0x155) + 'e']()[_0x164de2(0x149)]();
    const _0x24e912 = document[_0x164de2(0x15e) + _0x164de2(0x15c)](_0x5e0aa1[_0x164de2(0x166)]);
    if (_0x5e0aa1[_0x164de2(0x152)](_0xa8aa10, '')) {
        _0x5e0aa1[_0x164de2(0x140)](textVazio);
        return;
    }
    const _0x3cb7ba = [_0x5e0aa1[_0x164de2(0x14e)]], _0x3d01ee = [
            _0x5e0aa1[_0x164de2(0x13e)],
            _0x5e0aa1[_0x164de2(0x144)],
            _0x5e0aa1[_0x164de2(0x15a)],
            '28'
        ], _0x1910fe = [
            '24',
            '2',
            _0x5e0aa1[_0x164de2(0x159)]
        ], _0x5b5f29 = [
            '38',
            '10',
            '10',
            _0x5e0aa1[_0x164de2(0x15b)]
        ], _0x314c3f = _0xa8aa10[_0x164de2(0x150)](/\s+/);
    function _0x395725(_0x24496b, _0x40eef4) {
        const _0x293373 = _0x164de2;
        return _0x24496b[_0x293373(0x156)](_0x51f734 => _0x40eef4[_0x293373(0x165)](_0x51f734));
    }
    if (_0x5e0aa1[_0x164de2(0x13b)](_0x395725, _0x3cb7ba, _0x314c3f))
        _0x5e0aa1[_0x164de2(0x14c)](mostrarDivIniciar);
    else {
        if (_0x5e0aa1[_0x164de2(0x14a)](_0x395725, _0x3d01ee, _0x314c3f))
            contadorRespostasCorretas++, _0x5e0aa1[_0x164de2(0x148)](contadorRespostasCorretas, 0xff1 + 0x1267 * -0x1 + 0x279) ? _0x5e0aa1[_0x164de2(0x140)](funcaoQuandoTodasCorretas) : _0x5e0aa1[_0x164de2(0x14c)](mostrarResposta);
        else {
            if (_0x5e0aa1[_0x164de2(0x15f)](_0x395725, _0x1910fe, _0x314c3f))
                contadorRespostasCorretas++, _0x5e0aa1[_0x164de2(0x14d)](contadorRespostasCorretas, 0x3d0 + 0x1417 + -0x17e4) ? _0x5e0aa1[_0x164de2(0x13c)](funcaoQuandoTodasCorretas) : _0x5e0aa1[_0x164de2(0x140)](mostrarResposta);
            else
                _0x5e0aa1[_0x164de2(0x15f)](_0x395725, _0x5b5f29, _0x314c3f) ? (contadorRespostasCorretas++, _0x5e0aa1[_0x164de2(0x14d)](contadorRespostasCorretas, -0x221a + 0x1 * 0x1c26 + 0x5f7 * 0x1) ? _0x5e0aa1[_0x164de2(0x140)](funcaoQuandoTodasCorretas) : _0x5e0aa1[_0x164de2(0x140)](mostrarResposta)) : _0x5e0aa1[_0x164de2(0x14b)](errorText);
        }
    }
    _0x5e0aa1[_0x164de2(0x14a)](setTimeout, () => {
        const _0x183b9f = _0x164de2;
        _0x24e912 && (_0x24e912[_0x183b9f(0x143)] = ''), document[_0x183b9f(0x15e) + _0x183b9f(0x15c)](_0x5e0aa1[_0x183b9f(0x161)])[_0x183b9f(0x13a)] = '';
    }, -0x195a + 0x3 * -0x3c8 + 0x1a6 * 0x1b);
}

/*function primeira() {
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
        mostrarDivIniciar();

    } else if (contemPalavras(palavrasChave, resposta)) {
        contadorRespostasCorretas++;
        if (contadorRespostasCorretas === 3) {
            funcaoQuandoTodasCorretas();
        } else {
            mostrarResposta();
        }


    } else if (contemPalavras(palavrasChaveTwo, resposta)) {
        contadorRespostasCorretas++;
        if (contadorRespostasCorretas === 3) {
            funcaoQuandoTodasCorretas();
        } else {
            mostrarResposta();
        }
    } else if (contemPalavras(palavrasChaveThree, resposta)) {
        contadorRespostasCorretas++;
        if (contadorRespostasCorretas === 3) {
            funcaoQuandoTodasCorretas();
        } else {
            mostrarResposta();
        }
    } else {
        errorText();
    }

    setTimeout(() => {
        if (mensagem) {
            mensagem.innerHTML = "";
        }
        document.getElementById('pergunta').value = "";
    }, 2000);



}*/

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

function textoInfor() {
    let conteudoFormatado = document.getElementById('conteudoFormatado');
    let p = document.createElement('p');
    p.innerHTML = `
    <strong>Bem Vindo(a). Leia com bastante atenção</strong><br><br>
    
    <strong>1ª) QUESTÃO:</strong><br><br>
    
    "O poder sobre os outros é fraqueza disfarçada de força.<br>
    O verdadeiro poder é interior e está à sua disposição agora.<br>
    O medo será uma companhia constante para qualquer pessoa que esteja identificada<br>
    com a mente e, portanto, desconectada do seu verdadeiro poder, o eu profundo enraizado<br>
    no Ser"<br><br>
    
    <strong>Charada:</strong><br><br>
    
    No livro onde o poder verdadeiro é descrito!<br>
    Uma frase sábia é um tesouro escondido.<br>
    Se procurares na página correta, saberás.<br>
    Que só nome ou autor não será o suficiente.<br>
    Mas até onde precisou chegar para sua resposta completar. !<br><br>
    
    A sua resposta deve seguir este exemplo sempre com espaço:<br>
    nome autor pagina<br>
    alto da comparecida Celton Melo 10<br><br>
    
    <strong>2ª) QUESTÃO:</strong><br><br>
    
    Charada:<br>
    Se, ao olhar a expressão, você se atrapalhar.<br>
    Vá até este link, irei te ajudar!<br>
    <a href="https://drive.google.com/file/d/13TsyzdBUt6hzrPYiRlP8GUDfLSjhRX0R/view?usp=drivesdk" target="_blank">https://drive.google.com/file/d/13TsyzdBUt6hzrPYiRlP8GUDfLSjhRX0R/view?usp=drivesdk</a><br>
    Na primeira expressão, encontre o valor de (x). (x^2 + 15 \times 51 - 33 + 5^4 + x + 2 \times 17)<br>
    Na segunda  expressão, encontrer o valor de (x). (2 \times x^3 - 5 \times x^2 + 4 \times 7 + 9) = 478<br>
    Se você pegar esses dois valores de (x) e colocá-los um do lado do outro.<br>
    você terá o valor de (x) para a terceira expressão.<br>
    Terceira expressão: x = x da primeira expressão do lado do x da segunda expressão,<br>
    observe não e somado e sim juntar !<br>
    (x \times 2 + 4 \times 211 + 6^4 - x \times 2 + 91)<br>
    Agora, para solucionar a terceira conta, usando o x da primeira expressão e segunda expressão.<br><br>
    
    Qual é o valor da terceira expressão?<br><br>
    
    A sua resposta deve seguir este exemplo sempre com espaço:<br>
    primeira expressão  segunda expressão  terceira expressão <br>
    290 4537 7654<br><br>
    
    44°29' ? "N 11°20'33.8"E<br><br>
    
    exemplo:<br><br>
    
    21°50'16"N 73°43'10"E<br><br>
    
    <strong>3ª) QUESTÃO:</strong><br><br>
    
    Charada: <br>
    Qual lugar esconde onde os graus vão apontar?<br>
    Entre o norte e o leste, seu paradeiro desvendar. <br>
    O número que falta é o que hoje está a comemorar. <br>
    Mas é o do seu companheiro que está para chegar.<br><br>
    
    Se não achou o número, pare para pensar.<br>
    Os anos que comemoraram e uma quantidade,<br>
    mais os anos de alguém que chegou nas suas vidas.<br>
    Somadas, este número vai se revelar.<br><br>
    
    Muitas vezes, o que procuramos não está.<br>
    Em nossa frente. Tão pouco atrás.<br>
    Se não está à direita ou à esquerda.<br>
    Cabe a você saber onde procurar.<br><br>
    
    Quem mudou o tempo com um decreto sagrado,<br>
    Reduzindo os dias no calendário tão usado,<br>
    Dez só se foram, num gesto esperado.<br>
    Nome e poder, por ele, são lembrados.<br><br>
    
    Se fosse em outra época, o dia era trocado.<br>
    Uma data muito importante em suas vidas.<br>
    Para outra data seria marcado.<br><br>
    
    A sua resposta deve seguir este exemplo sempre com espaço:<br>
    o número que falta resto da resposta<br>
    1900 anarquia colesterol 367 1500
    `;

    // Adiciona o parágrafo criado à div #conteudoFormatado
    conteudoFormatado.appendChild(p);
}


var voltar = document.querySelector('.voltar');
var proximo = document.querySelector('.proximo');
var sair = document.querySelector('.sair');

voltar.addEventListener('click', function () {
    ocultarDivIniciar()
})

proximo.addEventListener('click', function () {
    ocultarResposta();
})

sair.addEventListener('click', function () {
    ocultarVencer();
})

var divVisivel = document.getElementById('divVisivel')
var acertouRes = document.querySelector('.acertouRes')

function mostrarDivIniciar() {
    divVisivel.style.display = 'block';
}

function ocultarDivIniciar() {
    divVisivel.style.display = 'none';
}


function ocultarResposta() {
    acertouRes.style.display = 'none';
}

function mostrarResposta() {
    acertouRes.style.display = 'block';
}


function ocultarVencer() {
    sair.style.display = 'none';
}

function mostrarVencer() {
    sair.style.display = 'block';
}
function funcaoQuandoTodasCorretas() {
    mostrarVencer();
}

textoInfor();
let conteudo = String.raw`
1ª) QUESTÃO:

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

2ª) QUESTÃO:

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


3ª) QUESTÃO:

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
criarArquivoTxt(conteudo);