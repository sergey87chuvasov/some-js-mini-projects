const ul = document.querySelector('ul');
const input = ul.querySelector('input');

function addTag(e) {

    if (e.key === 'Enter') {
        let tag = e.target.value.replace(/\s+/g, ' '); // remove space from user tag
        console.log(e.target.value);
    }
}

input.addEventListener('keyup', addTag)