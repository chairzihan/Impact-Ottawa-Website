document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Get the target section
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Only proceed if target exists and isn't already active
            if (targetSection && !targetSection.classList.contains("active")) {
                // Fade out current active section
                const currentActive = document.querySelector("section.active");
                if (currentActive) {
                    currentActive.classList.remove("active");
                    
                    // Wait for transition to complete before hiding
                    currentActive.addEventListener("transitionend", function handler() {
                        currentActive.style.display = "none";
                        currentActive.removeEventListener("transitionend", handler);
                        
                        // Show and fade in new section
                        targetSection.style.display = "block";
                        setTimeout(() => {
                            targetSection.classList.add("active");
                        }, 20);
                    });
                } else {
                    // If no current active (initial load)
                    targetSection.style.display = "block";
                    setTimeout(() => {
                        targetSection.classList.add("active");
                    }, 20);
                }
            }
        });
    });
    
    // Initialize first section
    sections[0].style.display = "block";
    setTimeout(() => {
        sections[0].classList.add("active");
    }, 20);
});