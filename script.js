const avançar = document.querySelectorAll('.btn-proximo');

avançar.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'etapa-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})