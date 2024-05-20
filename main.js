let button = document.getElementById('btn');
let paragrafPierwszy = document.querySelector('.czerwony');
let paragrafDrugi = document.querySelector('.zolty');

function setBackground() {
    paragrafPierwszy.style.backgroundColor = 'red';
    paragrafDrugi.style.backgroundColor = 'yellow';
}

button.addEventListener('click', setBackground);
