const file = document.querySelector('#file');
const image = document.querySelector('.image');
const cancelBtn = document.querySelector('.cancel-btn');

// FileReader – это объект, который мы можем использовать для чтения содержимого файлов в браузере. 
// При этом делает он это действие асинхронно.
file.addEventListener('change', function() {
    const reader = new FileReader();
    image.classList.add('active');
    cancelBtn.classList.add('active');
    reader.addEventListener('load', () => {
        document.querySelector('#image').src = reader.result;
    })

    reader.readAsDataURL(this.files[0])
})

cancelBtn.addEventListener('click', () => {
    image.classList.remove('active');
    cancelBtn.classList.remove('active');
})
