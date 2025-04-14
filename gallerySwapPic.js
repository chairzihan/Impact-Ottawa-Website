document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const dots = document.querySelectorAll(".dot");
    
    let currentIndex = 0;
    let autoSlideInterval;
    const slideCount = slides.length;

    // Initialize slider
    function initSlider() {
        updateSlider();
        startAutoSlide();
        
        // Pause on hover
        const gallery = document.querySelector(".gallery-container");
        gallery.addEventListener("mouseenter", pauseAutoSlide);
        gallery.addEventListener("mouseleave", startAutoSlide);
    }

    // Update slider position
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }

    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    // Start auto sliding
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    // Pause auto sliding
    function pauseAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners
    nextBtn.addEventListener("click", function() {
        nextSlide();
        pauseAutoSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener("click", function() {
        prevSlide();
        pauseAutoSlide();
        startAutoSlide();
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            currentIndex = index;
            updateSlider();
            pauseAutoSlide();
            startAutoSlide();
        });
    });

    // Initialize
    initSlider();
});