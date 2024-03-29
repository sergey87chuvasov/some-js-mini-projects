const rangeInput = document.querySelectorAll('.range-input input');
const progress = document.querySelector('.slider .progress');
const priceInput = document.querySelectorAll('.price-input input');

let priceGap = 1000;

priceInput.forEach(input => {
    input.addEventListener('input', (e) => {

        // get two inps value and pars them to number
        let minVal = parseInt(priceInput[0].value);
        let maxVal = parseInt(priceInput[1].value);

        if((maxVal - minVal >= priceGap) && maxVal <= 10000) {
            if(e.target.className === 'input-min') { 
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
            } else {
                rangeInput[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
            }
        } 
       
    })

});

rangeInput.forEach(input => {
    input.addEventListener('input', (e) => {

        // get range value
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);
        // console.log(minVal, maxVal);

        // let percent = (minVal / rangeInput[0].max) * 100;
        // console.log(percent);

        if(maxVal - minVal < priceGap) {
            if(e.target.className === 'range-min') { // if act slider is min slid
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
        }
       
    })

});