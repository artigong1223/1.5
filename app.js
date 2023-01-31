new Swiper('.image-slider', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        simulateTouch: false,
                        grabCursor: false,
                        touchRatio: 0
                    }
                }
                });
const swiperWrapper = document.querySelector('.service__swiper')
const arrow = document.getElementById('arr')
document.querySelector('.services__more').addEventListener('click', () => {
    swiperWrapper.classList.toggle('service__swiper_overflow')
    arrow.classList.toggle('more-title')
    if (arrow.classList.contains('more-title')) {
        arrow.textContent = "Скрыть"
    } else {
        arrow.textContent = "Показать все"
    }
})
