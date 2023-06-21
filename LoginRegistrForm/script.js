const LogIn = document.querySelector('.login');
const LoginBtn = document.querySelector('.loginBtn');

const Register = document.querySelector('.register');
const RegisterBtn = document.querySelector('.registerBtn');

LoginBtn.addEventListener('click', () => {
    LogIn.classList.add('active')
    Register.classList.add('active')
})

RegisterBtn.addEventListener('click', () => {
    LogIn.classList.remove('active')
    Register.classList.remove('active')
})