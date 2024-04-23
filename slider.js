// const a = document.querySelectorAll('.slider');
// var counter = 0;
// const totalSlides = a.length;

// a.forEach((slider, index) => {
//     slider.style.left = `${index * 100}%`
// })

// const Previous = () => {
//     if (counter > 0) {
//         counter--
//     } else {
//         counter = totalSlides - 1
//     }
//     sliderrun()
// }

// const Next = () => {
//     if (counter < totalSlides - 1) {
//         counter++
//     } else {
//         counter = 0
//     }
//     sliderrun()
// }

// const sliderrun = () => {
//     a.forEach((slider) => {
//         slider.style.transform = `translateX(-${counter * 100}%)`
//     })
// }

// // Automatically advance the slider every 4 seconds
// setInterval(() => {
//     Next();
// }, 4000);

// // Manually trigger the first slide transition
// setTimeout(() => {
//     Next();
// }, 100);

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slider");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].style.left = "-100%";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].style.left = "0";
        setTimeout(showSlides, 3000);
    }
});
