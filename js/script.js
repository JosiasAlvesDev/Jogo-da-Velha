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


        alert($('#entrada_apelido_jogador1').val());
        alert($('#entrada_apelido_jogador2').val());
    })
});