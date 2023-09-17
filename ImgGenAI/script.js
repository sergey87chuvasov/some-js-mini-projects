const generateForm = document.querySelector('.generate-form');
const imageGallery = document.querySelector('.image-gallery');

const OPENAI_API_KEY = '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';
let isImagesGenerating = false;

const updateImageCard = (imgDataArray) => {
    imgDataArray.forEach((imgObject, index) => {
        const imgCard = imageGallery.querySelectorAll('.img-card')[index];
        const imgElement = imgCard.querySelector('img');
        const downloadBtn = imgCard.querySelector('.download-btn');

        const aiGeneratedImg = `data:image/jpeg;base64, ${imgObject.b64_json}`;
        imgElement.src = aiGeneratedImg;

        imgElement.onload = () => {
            imgCard.classList.remove('loading');
            downloadBtn.setAttribute('href', aiGeneratedImg);
            downloadBtn.setAttribute('download', `${new Date().getTime()}.jpg`)
        }
    })
}

const generateAiImages = async (userPromt, userImgQuantity) => {
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                prompt: userPromt,
                n: parseInt(userImgQuantity),
                size: '512x512',
                response_format: 'b64_json'
            })
        })

        if(!response.ok) throw new Error('Failed...');

        const { data } = await response.json();
        // console.log(data);
        updateImageCard([...data])

    } catch (error) {
        alert(error.message)
    } finally {
        isImagesGenerating = false;
    }
}

const handleFormSubmission = (e) => {
    e.preventDefault();
    if(isImagesGenerating) return;
    isImagesGenerating = true;
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
    ).join('');

    // console.log(imgCardMarkup);

    imageGallery.innerHTML = imgCardMarkup;

    generateAiImages(userPromt, userImgQuantity)
}

generateForm.addEventListener('submit', handleFormSubmission);