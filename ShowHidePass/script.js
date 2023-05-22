let password = document.getElementById('password');
let togglePass = document.getElementById('toggle');

function showHide() {
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        togglePass.classList.add('hide');
    } else {
        password.setAttribute('type', 'password');
        togglePass.classList.remove('hide');
    }
}