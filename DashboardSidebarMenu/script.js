let menuToggle = document.querySelector('.menuToggle');
let sideBar = document.querySelector('.sidebar');
let menuList = document.querySelectorAll('.menuList li');
console.log(menuList)

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    sideBar.classList.toggle('active');
}

function activeLink() {
    menuList.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

menuList.forEach((item) => item.addEventListener('click', activeLink))