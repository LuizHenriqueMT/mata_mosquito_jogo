//aplicação criada a partir dos estudos do professor Jorge Sant Ana

    var altura = 0;
    var largura = 0;
    var vidas = 1;
    var tempo = 10;
    tempoMosquito = 1500;

    var nivel = window.location.search;
    nivel = nivel.replace('?','');

    if (nivel === 'normal') {
        tempoMosquito = 1500
    } else if (nivel === 'dificil') {
        tempoMosquito = 1000
    } else if (nivel === 'chucknorris') {
        tempoMosquito = 750
    }

    function ajustaTamanhoTela() {
        altura = window.innerHeight;
        largura = window.innerWidth;
    }

    ajustaTamanhoTela();

    var cronometro = setInterval(function() {
        tempo -= 1;

        if (tempo < 0) {
            clearInterval(cronometro);
            clearInterval(criaMosquito);
            window.location.href = "vitoria.html";
        } else {
            document.getElementById('cronometro').innerHTML = tempo;    
        }        
    },1000);

    function posicaoRandomica() {
        //remover a imagem caso exista na tela
        if (document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove();

            if (vidas > 3) {
                window.location.href = 'fim_de_jogo.html';    
            } else {
                document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
                vidas++;
            }
            
        }
        
        //controle de posicão onde a imagem irá aparecer
        var posicaoX = Math.floor(Math.random() * largura) - 90;
        var posicaoY = Math.floor(Math.random() * altura) - 90;

        posicaoX = posicaoX < 0 ? 0 : posicaoX;
        posicaoY = posicaoY < 0 ? 0 : posicaoY;

        //criação de elemento html
        var mosquito = document.createElement('img');
        mosquito.src = 'imagens/mosquito.png';
        mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio();

        mosquito.style.left = posicaoX + 'px';
        mosquito.style.top = posicaoY + 'px';
        mosquito.style.position = 'absolute';
        mosquito.id = 'mosquito';
        mosquito.onclick = function() {
            this.remove();
        }

        document.body.appendChild(mosquito);

        tamanhoAleatorio();
    }

    function tamanhoAleatorio() {
        var classe = Math.floor(Math.random() * 3);
        
        switch (classe) {
            case 0:
                return 'mosquito1';
            case 1:
                return 'mosquito2';
            case 2:
                return 'mosquito3';
        }
    }

    function ladoAleatorio() {
        var lado = Math.floor(Math.random() * 2);
        
        switch (lado) {
            case 0:
                return 'ladoA';
            case 1:
                return 'ladoB';
        }
    }