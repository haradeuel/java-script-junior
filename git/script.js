$(document).ready(function(){
    const button = $('#button');
    const inicioIntervalo = $('#inputInicio');
    const finalIntervalo = $('#inputFinal');
    const resultado = $('#resultado');
    const validacao= $('#validacao')

    function validarValores(inicio,final){
        if(isNaN(inicio) || isNaN(final)){
            validacao.text('Insira números válidos');
            return true;
        }
        if(inicio < 0 || final < 0){
            validacao.text('Insira um número positivo');
            return true;
        }
        if(inicio > final){
            validacao.text('O intervalo de ínicio deve ser maior que o final');
            return true;
        }

        validacao.text('');
        return false;
    }    

    
    button.on('click',function(){
        const inicio = parseInt(inicioIntervalo.val());
        const final = parseInt(finalIntervalo.val());

        if(validarValores(inicio,final)){
            return;
        }

        let soma = 0;
        for(let i = inicio; i <= final;i++){
            soma+=i;
        }
        
        resultado.text(`A soma  do intervalo é : ${soma}`);   
        
    });

});