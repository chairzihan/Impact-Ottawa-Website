
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
