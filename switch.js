
    document.addEventListener("DOMContentLoaded", () => {
        const navLinks = document.querySelectorAll("nav a");
        const sections = document.querySelectorAll("section");

        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault(); 
             
                sections.forEach(section => section.classList.remove("active"));

                // Get the target section's ID from the href
                const targetId = link.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);

                // Add 'active' class to the target section
                if (targetSection) {
                    targetSection.classList.add("active");
                }
            });
        });
        sections[0].classList.add("active");
    });
    document.addEventListener("DOMContentLoaded", () => {
        const nextButton = document.getElementById("next-btn");
        const prevButton = document.getElementById("prev-btn");
        const images = document.querySelectorAll(".images img");
        let currentIndex = 0;
    
        // Function to show the current image
        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = i === index ? "block" : "none";
            });
        }
    
        // Show the first image initially
        showImage(currentIndex);
    
        // Event listener for the "Next" button
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
            showImage(currentIndex);
        });
    
        // Event listener for the "Previous" button
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
            showImage(currentIndex);
        });
    });
