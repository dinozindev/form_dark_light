// busca o ícone de lua/sol e armazena na const modeIcon.
const modeIcon = document.getElementById('mode__icon');

// ao ícone ser clicado, aciona a arrow function.
modeIcon.addEventListener('click', () => {
    // busca o elemento <form> com id 'login__form', que abrange todo o container de login.
    const form = document.getElementById('login__form');
    // se a const 'modeIcon'(ícone da lua/sol) conter a classe "fa-moon", ela será removida, e adicionada a classe "fa-sun", que transformará a lua em sol. O if representa o que acontece quando a página é transformada em light mode. 
    if(modeIcon.classList.contains('fa-moon')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    // além disso, adiciona a classe 'dark' a constante 'form', que alterará os estilos do login para dark mode. 
        form.classList.add('dark');
    //o return fará com que, ao a condição ser dada como verdadeira, o código volta ao if, mantendo um loop infinito.     
        return;
    
    // ao ser pressionado, caso o modeIcon não tiver a classe 'fa-moon', ela será adicionada e a classe 'fa-sun' será removida, assim como a classe 'dark' será removida de form. O else representará o que acontece quando o ícone de sol é clicado, tornando a página em dark mode. 
    } else {
        modeIcon.classList.add('fa-moon');
        modeIcon.classList.remove('fa-sun');
        form.classList.remove('dark');
    }
});