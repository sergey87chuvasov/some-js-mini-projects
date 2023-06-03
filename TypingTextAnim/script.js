const secondText = document.querySelector('.second-text');

let animFunc = () => {
    setTimeout(() => {
        secondText.innerHTML = 'JAVASCRIPT DEVELOPER';
    },0)

    setTimeout(() => {
        secondText.innerHTML = 'FRONT-END DEVELOPER'
    },5000)

    setTimeout(() => {
        secondText.innerHTML = 'REACT DEVELOPER'
    },10000)
}


animFunc()

setInterval(animFunc, 15000)