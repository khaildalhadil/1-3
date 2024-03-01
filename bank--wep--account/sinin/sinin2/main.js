

const firstBtn = document.querySelector('.first--btn');
const contnet = document.querySelector('.contnet');
const gridColumnTwo = document.querySelector('.grid--column--two');




firstBtn.addEventListener('click', function() {
    gridColumnTwo.classList.remove('hidden');
    contnet.classList.add('hidden');
})