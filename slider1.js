const a = document.querySelectorAll('.slider');
let counter = 0;
const totalSlides = a.length;

a.forEach((slider, index) => {
    slider.style.left = `${index * 100}%`;
});

const Previous = () => {
    if (counter > 0) {
        counter--;
    } else {
        counter = totalSlides - 1;
    }
    sliderrun();
};

const Next = () => {
    if (counter < totalSlides - 1) {
        counter++;
    } else {
        counter = 0;
    }
    sliderrun();
};

const sliderrun = () => {
    a.forEach((slider) => {
        slider.style.transition = 'transform 2s ease'; 
        slider.style.transform = `translateX(-${counter * 100}%)`;
    });
};
sliderrun();
setInterval(Next, 3000);
