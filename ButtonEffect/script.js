let btn = document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;

        // Свойство clientHeight содержит высоту элемента внутри границ вместе с padding, но без border и прокрутки.
        let btnWidth = btn.clientWidth;
        let btnHeight = btn.clientHeight;

        let transX = (x - btnWidth/2);
        let transY = (y - btnHeight/2);

        btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

        let mx = e.pageX - btn.offsetLeft;
        let my = e.pageY - btn.offsetTop;

        btn.style.setProperty('--x', mx + 'px');
        btn.style.setProperty('--y', my + 'px');
    })

    btn.addEventListener('mouseout', (e) => {
        btn.style.transform = '';
    })
})