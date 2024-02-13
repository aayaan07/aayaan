// 3D Hover Effect
const tiltHoverItems = document.querySelectorAll("[data-hover-effect='tilt3d']")

tiltHoverItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        let pxPosition = e.x - item.getBoundingClientRect().left;
        let positionX = (pxPosition / item.offsetWidth) * 100;

        let pyPosition = e.y - item.getBoundingClientRect().top;
        let positionY = (pyPosition / item.offsetHeight) * 100;

        item.style.setProperty("--rX", (0.5) * (50 - positionY) + 'deg');
        item.style.setProperty("--rY", -(0.5) * (50 - positionX) + 'deg');
    })

    item.addEventListener('mouseout', () => {
        item.style.setProperty("--rX", '0deg')
        item.style.setProperty("--rY", '0deg')
    })
})






