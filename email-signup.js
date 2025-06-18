document.addEventListener("DOMContentLoaded", function() {
    const emailForm = document.getElementById("emailForm");
    
    if (emailForm) {
        emailForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const email = document.getElementById("emailInput").value.trim();
            const messageDiv = document.getElementById("formMessage");
            
            if (!validateEmail(email)) {
                messageDiv.textContent = "Please enter a valid email address";
                messageDiv.style.color = "#ff3232";
                return;
            }
            
            // In a real implementation, you would send to a server
            // For now, we'll simulate and store in localStorage
            storeEmailLocally(email);
            
            messageDiv.textContent = "Thank you for subscribing!";
            messageDiv.style.color = "#0bb99c";
            emailForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                messageDiv.textContent = "";
            }, 5000);
        });
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function storeEmailLocally(email) {
    console.log(`Email to be saved: ${email}`);
    
    // For demo purposes, store in localStorage
    let subscribers = JSON.parse(localStorage.getItem('emailSubscribers') || '[]');
    subscribers.push({
        email: email,
        date: new Date().toISOString()
    });
    localStorage.setItem('emailSubscribers', JSON.stringify(subscribers));


}