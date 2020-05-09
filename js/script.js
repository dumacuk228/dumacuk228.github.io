document.addEventListener('DOMContentLoaded', main);

function main() {
    let nextBtn = document.querySelector('.slider-buttons #right'),
        prevBtn = document.querySelector('.slider-buttons #left'),
        slides = document.querySelectorAll('.slider .slide'),
        slider = document.querySelector('.slider');

    slider.style.width = `${slides.length * 100}%`;

   // slides.forEach(i => {
     //   i.style.width = `${100 / slides.length}%`;
    //});

    let nextImg = () => {
        let val = parseFloat(slider.style.transform.slice(11));
        val -= 100 / slides.length;
        if (Math.abs(val) > (100 * (slides.length - 1) / slides.length)) {
            val = 0;
        }
        slider.style.transform = `translateX(${val}%)`;
    };

    let prevImg = () => {
        let val = parseFloat(slider.style.transform.slice(11));
        val += 100 / slides.length;
        if (val > 0) {
            val = -(100 * (slides.length - 1) / slides.length);
        }
        slider.style.transform = `translateX(${val}%)`;
    };

    let timerId = setInterval(nextImg, 5000);

    nextBtn.addEventListener('click', () => {
        clearTimeout(timerId);
        nextImg();
        timerId = setInterval(nextImg, 5000);
    });
    prevBtn.addEventListener('click', () => {
        clearTimeout(timerId);
        prevImg();
        timerId = setInterval(nextImg, 5000);
    });
}