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
const swiperWrapper = document.querySelector('.swiper-wrapper')
const moreTitle = document.querySelector('.more-title')
document.querySelector('.services__more').addEventListener('click', () => {
    swiperWrapper.classList.toggle('swiper-wrapper1')
    document.querySelector('.arr').classList.toggle('arr1')
    if (swiperWrapper.classList.contains('swiper-wrapper1')) {
        moreTitle.innerHTML = 'Скрыть'
    } else {
        moreTitle.innerHTML = 'Показать все'
    }
})
