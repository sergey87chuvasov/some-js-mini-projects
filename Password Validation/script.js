const passwordInput = document.querySelector('.pass-field input');
const eyeIcon = document.querySelector('.pass-field i');
const requirementList = document.querySelectorAll('.requirement-list li');

// regular express
const requirements = [
    {regex: /.{8,}/, index: 0}, // MIN OF 8 CHAR
    {regex: /[0-9]/, index: 1}, // AT LEAST ONE NUM
    {regex: /[a-z]/, index: 2}, // AT LEAST ONE LOWERCASE LETTER
    {regex: /[^A-Za-z0-9]/, index: 3}, // AT LEAST ONE SPECIAL CHAR
    {regex: /[A-Z]/, index: 4}, // AT LEAST ONE UPPER LETTER
]

passwordInput.addEventListener('keyup', (e) => {
    requirements.forEach((item) => {

        // check if the pass matches regex
        const isValid = item.regex.test(e.target.value);
        // console.log(isValid);
        const requirementItem = requirementList[item.index];

        // update icon
        if(isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add('valid');
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove('valid');
        }
    })
})

eyeIcon.addEventListener('click', () => {
    // toggle
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

    // update eye
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === 'password' ? '' : '-slash'}`
})