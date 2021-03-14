const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const carouselItems = document.querySelectorAll('.review-item');
const carouselLength = carouselItems.length;
const offsetLength = carouselItems[1].offsetWidth;
const carouselInner = document.querySelector('.carousel-inner')

let counter = 0;

arrowLeft.addEventListener('click', () => {
    if (counter != 0) {
        counter--;
        console.log(counter);
        carouselInner.style.transform = `translateX(-${offsetLength*counter})`;
    }
})

arrowRight.addEventListener('click', () => {
    if (counter < carouselLength - 1) {
        counter++;
        console.log(counter);
        carouselInner.style.transform = `translateX(-${offsetLength * counter}px)`;
    }
})