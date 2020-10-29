function slider(slide, prevSlide, nextSlide, horizontal) {

    const slides = document.querySelectorAll(slide);

    let slideIndex = 1;

    function openSlide(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (slideIndex < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(slide => {
            slide.classList.add('animated');
            slide.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';
    }

    openSlide(slideIndex);

    setInterval(() => {
        openSlide(++slideIndex);
        if (horizontal) {
            slides[slideIndex - 1].classList.remove('slideInRight');  
            slides[slideIndex - 1].classList.add('slideInLeft'); 
        }
        slides[slideIndex - 1].classList.remove('slideInUp');
        slides[slideIndex - 1].classList.add('slideInDown');
        
    }, 3000);

    try {
        const prev = document.querySelector(prevSlide),
              next = document.querySelector(nextSlide);

        next.addEventListener('click', () => {
            openSlide(++slideIndex);  
            slides[slideIndex - 1].classList.remove('slideInRight');  
            slides[slideIndex - 1].classList.add('slideInLeft');   
 
        });
    
        prev.addEventListener('click', () => {
            openSlide(--slideIndex);
            slides[slideIndex - 1].classList.remove('slideInLeft');  
            slides[slideIndex - 1].classList.add('slideInRight');          
        });
    } catch (e) {}   
}

export default slider;