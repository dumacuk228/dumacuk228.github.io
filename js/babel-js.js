"use strict";

document.addEventListener('DOMContentLoaded', main);

function main() {
  var nextBtn = document.querySelector('.slider-buttons #right'),
      prevBtn = document.querySelector('.slider-buttons #left'),
      slides = document.querySelectorAll('.slider .slide'),
      slider = document.querySelector('.slider');
  slider.style.width = "".concat(slides.length * 100, "%");
  console.log(slider.style.width);
   // slides.forEach(i => {
  //   i.style.width = `${100 / slides.length}%`;
  //});

  var nextImg = function nextImg() {
    var val = parseFloat(slider.style.transform.slice(11));
    val -= 100 / slides.length;

    if (Math.abs(val) > 100 * (slides.length - 1) / slides.length) {
      val = 0;
    }

    slider.style.transform = "translateX(".concat(val, "%)");
  };

  var prevImg = function prevImg() {
    var val = parseFloat(slider.style.transform.slice(11));
    val += 100 / slides.length;

    if (val > 0) {
      val = -(100 * (slides.length - 1) / slides.length);
    }

    slider.style.transform = "translateX(".concat(val, "%)");
  };

  var timerId = setInterval(nextImg, 5000);
  nextBtn.addEventListener('click', function () {
    clearTimeout(timerId);
    nextImg();
    timerId = setInterval(nextImg, 5000);
  });
  prevBtn.addEventListener('click', function () {
    clearTimeout(timerId);
    prevImg();
    timerId = setInterval(nextImg, 5000);
  });
}