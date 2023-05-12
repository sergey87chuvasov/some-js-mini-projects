const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');

const passwordCheck = document.querySelector('.password-check');
const passwordInput = document.querySelector('.password');

const loginTextTtile = document.querySelector('.login_text_title');
const emailShow = document.querySelector('.email_shown');
const email = document.querySelector('.email');

btnNext.onclick = (btn) => {
    btn.preventDefault();
    pageBox.classList.add('active');
    setTimeout(() => passwordInput.focus(),500);
    loginTextTtile.innerHTML = 'Welcome';
    emailShow.innerHTML = email.value;
}

btnBack.onclick = (btn) => {
    btn.preventDefault();
    pageBox.classList.remove('active');
    loginTextTtile.innerHTML = 'Login in';
    emailShow.innerHTML = 'Not your computer? Use guest mode to login privately';
    email.focus();
}

passwordCheck.onclick = () => {
    if(passwordCheck.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}