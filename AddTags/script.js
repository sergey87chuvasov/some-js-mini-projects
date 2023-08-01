const ul = document.querySelector('ul');
const input = ul.querySelector('input');
const countNumb = document.querySelector('.details span');

let maxTags = 10;
let tags = [];

countTag();

function countTag() {
    input.focus();
    countNumb.innerHTML = maxTags - tags.length;
}

function createTag(){

    // remove all li tags before add
    ul.querySelectorAll('li').forEach(li => li.remove());
    // console.log(tags.slice().reverse()); // reverse arr

    tags.slice().reverse().forEach(tag => {
        let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML('afterbegin', liTag);
    })

    countTag();
}

function remove(element, tag) {
    let index = tags.indexOf(tag); // get remove tag
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)]; // remove select tag from arr
    element.parentElement.remove(); // remove li of removed tag
    // console.log(element, tag);
    // console.log(tags);

    countTag();
}

function addTag(e) {

    if (e.key === 'Enter') {
        let tag = e.target.value.replace(/\s+/g, ' '); // remove space from user tag
        // console.log(tag);

        if(tag.length > 1 && !tags.includes(tag)){ // tag is not exist
            if(tags.length < 10) {
                tag.split(',').forEach(tag => {
                    tags.push(tag); // add tag inside array
                    // console.log(tags);
    
                    createTag();
            });
            }
        } 
        e.target.value = '';
    }
}

input.addEventListener('keyup', addTag);

const removeBtn = document.querySelector('button');
removeBtn.addEventListener('click', () => {
    tags.length = 0;
    ul.querySelectorAll('li').forEach(li => li.remove());
    countTag()
})