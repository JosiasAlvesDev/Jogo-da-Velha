
var rodada =1;
var matriz_jogo = Array(3);

$(document).ready(function(){
    $('#btn_iniciar_jogo').click(function(){

        //Valida o campo apelido dos jogadores

        if ($('#entrada_apelido_jogador1').val() == '') {
            alert('Apelido do jogador 1 não foi preenchido');
            return false;
        }

        if ($('#entrada_apelido_jogador2').val() == '') {
            alert('Apelido do jogador 2 não foi preenchido');
            return false;
        }


        //Exibir os Apelidos

        $('#jogador1').html($('#entrada_apelido_jogador1').val());
        $('#jogador2').html($('#entrada_apelido_jogador2').val());


        //Controle das vizualizações das Divs
        $('#paginaInicial').hide();
        $('#palcoJogo').show();

    });

    $('.jogada').click(function(){

        var id_campo_clicado = this.id;
        jogada(id_campo_clicado);
    });

    function jogada(id){
        var icone = '';
        var ponto = 0;

        //Verificando de quem é a vez de jogar

        if (rodada % 2 == 1) {
            icone = 'url("imagens/marcacao_1.png")'
            ponto = -1;
        }else{
            icone = 'url("imagens/marcacao_2.png")'
            ponto = 1;
        }
        rodada++;
        
        $('#' + id).css('background-image', icone);
    }

});