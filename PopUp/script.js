const showPopup = document.querySelector('.showPopup');
const backBtn = document.querySelector('.backBtn');
const popUp = document.querySelector('.popUp');

showPopup.addEventListener('click', () => {
    popUp.classList.add('active');
})

backBtn.addEventListener('click', () => {
    popUp.classList.remove('active');
})