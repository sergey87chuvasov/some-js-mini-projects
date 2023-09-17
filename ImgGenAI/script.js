const generateForm = document.querySelector('.generate-form');
const imageGallery = document.querySelector('.image-gallery');

const handleFormSubmission = (e) => {
    e.preventDefault();
    // console.log(e.srcElement);
    // Event.srcElement это проприетарный синоним стандартного свойства Event.target. 
    //Специфичен для старых версий Microsoft Internet Explorer.

    const userPromt = e.srcElement[0].value;
    // console.log(userPromt)
    const userImgQuantity = e.srcElement[1].value;
    // console.log(userImgQuantity)

    // Функция Array.from() принимает три аргумента, последние два из которых не обязательны:
    // create html markup for image cards with loading state
    const imgCardMarkup = Array.from({length: userImgQuantity}, () => 
    ` <div class="img-card loading">
        <img src="./images/loader.svg" alt="image">
            <a href="#" class="dowload-btn">
        <img src="./images/download.svg" alt="download pic">
         </a>
    </div>`
    ).join('')

    // console.log(imgCardMarkup);

    imageGallery.innerHTML = imgCardMarkup;
}

generateForm.addEventListener('submit', handleFormSubmission);