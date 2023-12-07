$(document).ready(function() {

    //BOTAO IMAGEM +
    $('header button').click(function(){
        $('form').slideDown();

    })

    //BOTÃO DE CANCELAR
    $('#botao-cancelar').click(function(){

        $('form').slideUp();

    })

    //BOTAO DE ADICIONAR A IMAGEM
    $('form').on('submit', function(e){

        e.preventDefault();
        const enderecoNovaImagem = $('#endereço-imagem-nova').val();
        console.log(enderecoNovaImagem);
        const novoItem = $('<li style=" display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);

        $(` 
            <div class="overlay-imagem-link"> 
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver Imagem Inteira">
                    Ver Imagem Inteira
                </a>
            </div>
            
        `).appendTo(novoItem);

        $('<button class="botao-excluir">Excluir</button>').appendTo(novoItem);


        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();

        $('#endereço-imagem-nova').val(' ');
    })

    $('ul').on('click', '.botao-excluir', function() {
        $(this).closest('li').fadeOut(function(){
            $(this).remove();
        });
    });

})