let imgBxs = document.querySelectorAll('.imgBx');
let contentBxs = document.querySelectorAll('.contentBx');

for (let i = 0; i < imgBxs.length; i++) {
    imgBxs[i].addEventListener('mouseover', function(){
        for (var i = 0; i < contentBxs.length; i++) {
            contentBxs[i].className = 'contentBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active';

        for (var i = 0; i < imgBxs.length; i++) {
            imgBxs[i].className = 'imgBx';
        }

        this.className = 'imgBx active';
    })
}