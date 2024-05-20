let button = document.getElementById('btn');

const setBackground = () => {
    let paragrafPierwszy = document.querySelector('.czerwony');
    let paragrafDrugi = document.querySelector('.zolty');

    paragrafPierwszy.style.backgroundColor = 'red';
    paragrafDrugi.style.backgroundColor = 'yellow';
}

button.addEventListener('click', setBackground);
