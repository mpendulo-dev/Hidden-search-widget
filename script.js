const search = document.querySelector('.search');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');

// when a user clicks on the search icon it opens and close the search option
button.addEventListener('click', () => {
    search.classList.toggle('active')
    // focus cursor inside the input box
    input.focus();
});

